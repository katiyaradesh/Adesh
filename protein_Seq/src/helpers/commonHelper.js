import * as Constant from '../helpers/constant'

export function getInputProps(props, fields) {
    return {
        name: fields.name,
        type: fields.type,
        id: fields.name,
        value: fields.value,
        placeholder: fields.placeholderLabel,
        onChange: props.onChange,

    }
};

export const inputFields = {
    symbol: {
        id: Constant.SymbolCD,
        name: Constant.SymbolCD,
        type: "text",
        value: '',
        placeholderLabel: "* Gene symbol",
        required: true,
        tabIndex: 1,
    },
    seqPosition: {
        id: Constant.SeqCD,
        name: Constant.SeqCD,
        type: "text",
        value: '',
        placeholderLabel: "* Protein sequence position",
        required: true,
        tabIndex: 2,
    },
    aminoAcidLetter: {
        id: Constant.AmmionAcidCD,
        name: Constant.AmmionAcidCD,
        type: "text",
        value: '',
        placeholderLabel: "* Amino Acid",
        required: true,
        tabIndex: 3,
    }
}