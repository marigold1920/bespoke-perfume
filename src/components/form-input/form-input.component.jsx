import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, area, ...otherProps }) => (
    <div className="form-input">
        <div className="text">{label}</div>
        <label>
            {area ? (
                <textarea onChange={handleChange} {...otherProps}></textarea>
            ) : (
                <input onChange={handleChange} {...otherProps} />
            )}
        </label>
    </div>
);

export default FormInput;
