import React, { useState, useEffect } from "react";
import { getTranscript } from "../../state/actions/genomeActions";
import SearchBar from "../../organisms/SearchBar/index";
import Grid from "../../molecules/grid/index";
import { connect } from 'react-redux';
import { inputFields } from '../../helpers/commonHelper';
import * as Constant from '../../helpers/constant';

const Genomics = ({
    props,
    getTranscriptAction,
    Genome
}) => {
    const [data, setData] = useState([]);
    const [isDataLoading, setLoader] = useState(false);
    const [inputFieldsData, setInputFields] = useState(inputFields);
    const [errorMsg, setErrorMessage] = useState("");
    const tableSetting = [
        { name: "Transcript", header: "Transcript" },
        { name: "Amino Acid Position", header: "Amino Acid Position" },
        { name: "Amino Acid 10th Left Position", header: "Amino Acid 10th Left Position" }
    ]

    useEffect(() => {
        if (Genome
            && Genome.length > 0) {
            const symbol = inputFieldsData.symbol.value.toUpperCase();
            const data = Genome.filter(function (el) {
                return el.symbol === symbol
            });
            setLoader(false);
            if (data && data.length > 0)
                setData(getTableData(data[0].transcripts));
            else
                setErrorMessage("No records found");
        }
    }, [Genome, setData]);

    const getTableData = (data) => {
        //const pos = Number(inputFieldsData.seqPosition.value);
        const actualpos = Number(inputFieldsData.seqPosition.value) - 1;
        const tenthLeft = actualpos - 10 > -1 ? actualpos - 10 : 0;
        let array = [];
        let satisfiedData = [];
        data.forEach(function (item) {
            array.push({
                id: item.id,
                firstColumn: item.sequence[actualpos],
                secondColumn: item.sequence[tenthLeft]
            });
            if (item.sequence && item.sequence[actualpos] && item.sequence[actualpos].toUpperCase() === inputFieldsData.aminoAcidLetter.value.toUpperCase()) {
                satisfiedData.push({
                    id: item.id,
                    firstColumn: item.sequence[actualpos],
                    secondColumn: item.sequence[tenthLeft]
                });
            }
        });
        return { array: array, satisfiedData: satisfiedData };
    }

    const isFieldsValid = () => {
        if ((inputFieldsData.symbol.value === ""
            || inputFieldsData.symbol.value === null)
            ||
            (inputFieldsData.seqPosition.value === ""
                || inputFieldsData.seqPosition.value === null)
            ||
            (inputFieldsData.aminoAcidLetter.value == ""
                || inputFieldsData.aminoAcidLetter.value === null)) {
            setErrorMessage("All fileds required.");
            return false;
        }
        else if (isNaN(inputFieldsData.seqPosition.value)) {
            setErrorMessage("SeqPosition should be numeric value");
            return false;
        }
        else if (!isNaN(inputFieldsData.seqPosition.value)
            && Number(inputFieldsData.seqPosition.value) < 10) {
            setErrorMessage("SeqPosition should be greater or equal to 10");
            return false;
        }
        return true;
    }

    const handleClick = async () => {
        setErrorMessage('');
        if (isFieldsValid()) {
            const symbol = inputFieldsData.symbol.value.toUpperCase();
            const dataObj = Genome.filter(function (el) {
                return el.symbol === symbol;
            });
            if (dataObj.length === 0) {
                setLoader(true);
                setData({ ...getTableData([]) });
                await getTranscriptAction(symbol);
            } else {
                setLoader(true);
                setData({ ...getTableData(dataObj[0].transcripts) });
                setLoader(false);
            }
        }
    }

    const onChange = (event) => {
        setErrorMessage('');
        let data = inputFieldsData;
        if (event) {
            if (event.target.name === Constant.SymbolCD) {
                data.symbol.value = event.target.value;
            }
            else if (event.target.name === Constant.SeqCD) {
                data.seqPosition.value = event.target.value;
            }
            else if (event.target.name === Constant.AmmionAcidCD) {
                data.aminoAcidLetter.value = event.target.value;
            }
            setInputFields({ ...data });
        }
    }
    return (
        <>
            <SearchBar
                {...props}
                onChange={onChange}
                inputFields={inputFieldsData}
                onClick={handleClick}
                CTAText="Search"

            />
            {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
            {isDataLoading ? "Loading..." :
                data
                    && data.array
                    && data.array.length > 0 ?
                    <Grid {...props}
                        cols={tableSetting}
                        data={data.array}
                        rowsPerPage={5}
                        satisfiedCriteriaMatchedData={data.satisfiedData}
                    /> :
                    <div></div>}
        </>
    );
};


const mapStateToProps = ({
    Genome
}) => ({
    Genome: Genome
});

const mapDispatchToProps = {
    getTranscriptAction: getTranscript
};

export default connect(mapStateToProps, mapDispatchToProps)(Genomics);
