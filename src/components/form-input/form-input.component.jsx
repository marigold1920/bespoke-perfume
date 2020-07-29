import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, ...otherProps }) => (
    <input {...otherProps} onChange={handleChange} />
);

export default FormInput;
