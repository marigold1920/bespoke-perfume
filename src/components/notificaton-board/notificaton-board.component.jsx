import React from "react";
import Loading from "../loading/loading.component";
import EmptyMessage from "../empty-message/empty-message.component";

import { notificationApi } from "../../apis/api";

import Header from "../header/header.component";
import Notification from "../notification/notification.component";

import "./notificaton-board.styles.scss";

class NotificationBoard extends React.Component {
    state = {
        notifications: null,
    };

    componentDidMount() {
        notificationApi.get("/kemquhuyy").then(response =>
            this.setState({
                notifications: response.status === 200 ? response.data : [],
            })
        );
    }

    render() {
        const { notifications } = this.state;
        return (
            <div className="notificaton-board">
                <Header title="Hoạt động đơn hàng" />
                {notifications ? (
                    <div className="items">
                        {notifications.map(
                            ({ bookingId, ...otherProps }, index) => (
                                <Notification
                                    key={index}
                                    bookingName={`Booking ID ${bookingId}`}
                                    {...otherProps}
                                />
                            )
                        )}
                        {!notifications.length ? (
                            <EmptyMessage message="Không có hoạt động nào!" />
                        ) : null}
                    </div>
                ) : (
                    <Loading />
                )}
            </div>
        );
    }
}

export default NotificationBoard;
