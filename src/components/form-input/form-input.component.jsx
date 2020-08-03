import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, placeholder, ...otherProps }) => (
    <div className="inputBox">
        <input {...otherProps} onChange={handleChange} />
        <span>{placeholder}</span>
    </div>
);

export default FormInput;
