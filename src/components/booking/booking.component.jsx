import React from "react";

import { bookingApi } from "../../apis/api";

import Header from "../header/header.component";
import BookingItem from "../booking-item/booking-item.component";

import "./booking.styles.scss";

class Booking extends React.Component {
    state = {
        bookings: [],
    };

    componentDidMount() {
        bookingApi
            .get("/customers")
            .then(respons => this.setState({ bookings: respons.data }));
    }

    render() {
        const { bookings } = this.state;
        return bookings.length ? (
            <div className="booking">
                <Header title="Đơn hàng của bạn" action="Xem tất cả" />
                <div className="booking-overlap">
                    {bookings.map(({ bookingId, ...otherProps }) => (
                        <BookingItem key={bookingId} {...otherProps} />
                    ))}
                </div>
            </div>
        ) : null;
    }
}

export default Booking;
