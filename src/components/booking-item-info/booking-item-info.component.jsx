import React from "react";

import "./booking-item-info.styles.scss";

const BookingItemInfo = ({ title, value }) => (
    <div className="col-4 booking-item-info">
        <span className="title">{title}</span>
        <p className="value">{value}</p>
    </div>
);

export default BookingItemInfo;
