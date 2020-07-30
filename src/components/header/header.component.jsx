import React from "react";

import "./header.styles.scss";

const Header = ({ title, action }) => (
    <div className="header">
        <div className="title">
            <h3>{title}</h3>
        </div>
    </div>
);

export default Header;
