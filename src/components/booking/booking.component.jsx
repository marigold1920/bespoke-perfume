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
        bookingApi.get("/customers").then(respons =>
            this.setState({
                bookings: respons.data.slice(
                    0,
                    Math.min(4, respons.data.length)
                ),
            })
        );
    }

    render() {
        const { bookings } = this.state;
        return bookings.length ? (
            <div className="booking">
                <Header
                    title="Những lịch hẹn của bạn"
                    action="Xem tất cả lịch hẹn"
                />
                {bookings.map(({ bookingId, ...otherProps }) => (
                    <BookingItem key={bookingId} {...otherProps} />
                ))}
            </div>
        ) : null;
    }
}

export default Booking;
