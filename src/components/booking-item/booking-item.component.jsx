import React from "react";

import BookingItemInfo from "../booking-item-info/booking-item-info.component";

import "./booking-item.styles.scss";
import { ReactComponent as MoreArrow } from "../../assets/more-arrow.svg";

const BookingItem = ({
    image = "https://fimgs.net/mdimg/perfume/375x500.24892.jpg",
    name = "Precious Liquid Blue Agave",
    status = "Confirming",
    type,
    dateBooking,
    fee = "... VND",
    dateFinished,
    timeStart,
    timeEnd,
}) => (
    <div className="booking-item col-12">
        <div className="booking-item-image">
            <img src={image} alt="booking" />
        </div>
        <div className="booking-header">
            <div className="perfume-status">
                <div className="product-name">
                    <div className="title">
                        <h3>{name}</h3>
                        <div className={`status ${status.toLowerCase()}`}>
                            <p>{status}</p>
                        </div>
                    </div>
                    <div className="action">
                        <p>View booking details</p>
                        <MoreArrow />
                    </div>
                </div>
            </div>
            <div className="row booking-info">
                <BookingItemInfo title="Type Perfume:" value={type} />
                <BookingItemInfo title="Date Booking:" value={dateBooking} />
                <BookingItemInfo
                    title="Time:"
                    value={`${timeStart} - ${timeEnd}`}
                />
                <BookingItemInfo title="Fee:" value={fee} />
                <BookingItemInfo title="Date Finished:" value={dateFinished} />
                <div className="col-4 expert-info">
                    <div className="created-by">
                        <div className="expert-image">
                            <img
                                src="https://i.ibb.co/5hGTMh7/person-4.jpg"
                                alt="expert"
                            />
                        </div>
                        <div className="info">
                            <span>Created By</span>
                            <p>Victor Nguyen</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default BookingItem;
