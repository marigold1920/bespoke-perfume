import React from "react";

import "./newest-perfume-item.styles.scss";

const NewestPerfumeItem = ({ name, image, date = "20/07/2020" }) => (
    <div className="col-12 newest-perfume-item">
        <div className="perfume-image">
            <img src={image} alt="perfume-item" />
        </div>
        <div className="perfume-info">
            <span className="name">{name}</span>
            <p>Cập nhật bởi Expert, vào {date}</p>
        </div>
    </div>
);

export default NewestPerfumeItem;
