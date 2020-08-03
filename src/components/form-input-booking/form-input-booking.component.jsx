import React from "react";

import "./form-input-booking.styles.scss";

const FormInputBooking = ({ label, handleChange, ...otherProps }) => (
    <div className="form-group">
        <label>{label}</label>
        <input
            className="form-control"
            {...otherProps}
            onChange={handleChange}
        />
    </div>
);

export default FormInputBooking;
