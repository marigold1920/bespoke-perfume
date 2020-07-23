import React from "react";

import "./newest-perfume-item.styles.scss";

const PopularPerfumeItem = ({ name, image, date }) => (
    <div className="col-12 newest-perfume-item">
        <div className="perfume-image">
            <img src={image} alt="perfume-item" />
        </div>
        <div className="perfume-info">
            <span className="name">{name}</span>
            <p>Posted by Expert, on {date}</p>
        </div>
    </div>
);

export default PopularPerfumeItem;
