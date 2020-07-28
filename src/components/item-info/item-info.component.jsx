import React from "react";

import "./item-info.styles.scss";

const ItemInfo = ({ title, value, columnSize }) => (
    <div className={`${columnSize} item-info`}>
        <span className="title">{title}</span>
        <p className="value">{value}</p>
    </div>
);

export default ItemInfo;
