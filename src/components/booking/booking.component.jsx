import React from "react";
import Loading from "../loading/loading.component";
import EmptyMessage from "../empty-message/empty-message.component";

import { bookingApi } from "../../apis/api";

import BookingItem from "../booking-item/booking-item.component";

import "./booking.styles.scss";

class Booking extends React.Component {
    state = {
        bookings: null,
    };

    componentDidMount() {
        bookingApi.get("/customers").then(response =>
            this.setState({
                bookings: response.status === 200 ? response.data : [],
            })
        );
    }

    render() {
        const { bookings } = this.state;
        return (
            <div className="booking">
                <div className="booking-actions">
                    <div className="search-box">
                        <input
                            className="search-text"
                            type="text"
                            placeholder="Tìm kiếm..."
                        />
                        <button className="search-btn">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                    <div className="time-range"></div>
                </div>
                {bookings ? (
                    <div className="booking-overlap">
                        {bookings.map(({ bookingId, ...otherProps }) => (
                            <BookingItem key={bookingId} {...otherProps} />
                        ))}
                        {bookings.length ? (
                            <EmptyMessage message="Không có đơn hàng nào!" />
                        ) : null}
                    </div>
                ) : (
                    <Loading />
                )}
            </div>
        );
    }
}

export default Booking;
