import React from "react";

import "./dropdown.styles.scss";

const Dropdown = ({ options, handleChange, name, display, label }) => (
    <div className="dropdown">
        <label className="mr-2">{label}</label>
        <select
            className="custom-select mr-sm-2"
            onChange={handleChange}
            name={name}
            value={display}
        >
            <option disabled>{display}</option>
            {options.map(({ id, value }) => (
                <option value={id} key={id}>
                    {value}
                </option>
            ))}
        </select>
    </div>
);

export default Dropdown;
