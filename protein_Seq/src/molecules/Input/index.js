import React from "react";
import TextBox from '../../atoms/TextBox/index';
// import Label from '../../atoms/Label/index';

const Input = ({ ...props }) => (
    <div className="input-group">
        {/* <Label
            {...props}
        /> */}
        <TextBox
            {...props}
        />
    </div>
);

export default Input;