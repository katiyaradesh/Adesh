import React, { useState } from "react";
import Table from "../../atoms/Table/index";
import Pagination from "../../atoms/Pagination/index";
import useTable from "../../hooks/useTable";


const Grid = ({ ...props }) => {
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(props.data, page, props.rowsPerPage);
    return (
        <><div>All Transcripts:</div>
            <Table
                data={slice}
                cols={props.cols}
                rowsPerPage={props.rowsPerPage}
            />
            <Pagination
                range={range}
                slice={slice}
                setPage={setPage}
                page={page}
            />
            <div>Satisfied Transcript Critera</div>
            <Table
                cols={props.cols}
                data={props.satisfiedCriteriaMatchedData}
                rowsPerPage={props.rowsPerPage}
            />
        </>
    )
};

export default Grid;