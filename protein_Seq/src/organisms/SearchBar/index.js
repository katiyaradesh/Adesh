import React from "react";
import Input from '../../molecules/Input/index';
import Button from '../../atoms/Button/index';
import { getInputProps } from '../../helpers/commonHelper';

const SearchBar = ({ ...props }) => {
    return (
        <>
            <Input
                {...getInputProps(props, props.inputFields.symbol)}
            />
            <Input
                {...getInputProps(props, props.inputFields.seqPosition)}
            />
            <Input
                {...getInputProps(props, props.inputFields.aminoAcidLetter)}
            />
            <Button
                text={props.CTAText}
                onClick={props.onClick}
            />
        </>
    )
};
export default SearchBar;

