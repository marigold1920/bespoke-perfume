import React from "react";

import "./notification.styles.scss";

const Notification = ({
    bookingName,
    notification,
    date,
    time = "11:59 AM",
}) => (
    <div className="notification">
        <div className="notification-icon">
            <i className="fa fa-bell" aria-hidden="true"></i>
        </div>
        <div className="notification-body">
            <div className="main-content">
                <h3>{bookingName}</h3>
                <p>{notification}</p>
            </div>
            <div className="time">
                <span className="date">{date}</span>
                <p>{time}</p>
            </div>
        </div>
    </div>
);

export default Notification;
