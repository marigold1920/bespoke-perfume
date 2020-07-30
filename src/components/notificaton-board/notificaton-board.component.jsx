import React from "react";

import Header from "../header/header.component";
import Notification from "../notification/notification.component";

import "./notificaton-board.styles.scss";

class NotificationBoard extends React.Component {
    state = {
        notifications: [
            {
                id: 1,
                bookingName: "Booking Id 1498",
                message: "Tôi đang update vài thứ cho nước hoa nhen",
                date: "20/06/2020",
                time: "11:59 AM",
            },
            {
                id: 2,
                bookingName: "Booking Id 1498",
                message: "Tôi đang update vài thứ cho nước hoa nhen",
                date: "20/06/2020",
                time: "11:59 AM",
            },
            {
                id: 3,
                bookingName: "Booking Id 1498",
                message: "Tôi đang update vài thứ cho nước hoa nhen",
                date: "20/06/2020",
                time: "11:59 AM",
            },
            {
                id: 4,
                bookingName: "Booking Id 1498",
                message: "Tôi đang update vài thứ cho nước hoa nhen",
                date: "20/06/2020",
                time: "11:59 AM",
            },
            {
                id: 5,
                bookingName: "Booking Id 1498",
                message: "Tôi đang update vài thứ cho nước hoa nhen",
                date: "20/06/2020",
                time: "11:59 AM",
            },
            {
                id: 6,
                bookingName: "Booking Id 1498",
                message: "Tôi đang update vài thứ cho nước hoa nhen",
                date: "20/06/2020",
                time: "11:59 AM",
            },
        ],
    };

    render() {
        const { notifications } = this.state;
        return (
            <div className="notificaton-board">
                <Header title="Hoạt động đơn hàng" />
                <div className="items">
                    {notifications.map(({ id, ...otherProps }) => (
                        <Notification key={id} {...otherProps} />
                    ))}
                </div>
            </div>
        );
    }
}

export default NotificationBoard;
