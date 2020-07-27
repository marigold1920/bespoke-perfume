import React from "react";

import "./header.styles.scss";
import { ReactComponent as MoreArrow } from "../../assets/more-arrow.svg";

const Header = ({ title, action }) => (
    <div className="header">
        <div className="title">
            <h3>{title}</h3>
        </div>
        <div className="action">
            <MoreArrow />
        </div>
    </div>
);

export default Header;
