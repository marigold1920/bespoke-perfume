import React from "react";

import ItemInfo from "../item-info/item-info.component";

import "./recommended-perfume-item.styles.scss";

const RecommendedPerfumeItem = ({ name, image, longevity, sillage }) => (
    <div className="col-12 recommended-perfume-item">
        <div className="item-image">
            <img src={image} alt="recommended perfume" />
        </div>
        <div className="recommended-item-info">
            <span className="name">{name}</span>
            <div className="row info">
                <ItemInfo
                    title="Độ tỏa hương: "
                    value={sillage}
                    columnSize="col-6"
                />
                <ItemInfo
                    title="Độ lưu hương: "
                    value={longevity}
                    columnSize="col-6"
                />
            </div>
        </div>
    </div>
);

export default RecommendedPerfumeItem;
