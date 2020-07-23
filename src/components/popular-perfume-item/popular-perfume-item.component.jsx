import React from "react";

import "./popular-perfume-item.styles.scss";

const PopularPerfumeItem = ({ image }) => (
    <div className="popular-perfume-item">
        <div className="container-image">
            <img src={image} alt="popular item" />
        </div>
    </div>
);

export default PopularPerfumeItem;
