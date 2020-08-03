import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectToggleModal } from "../../redux/booking/booking.selectors";
import { toggleModalView } from "../../redux/booking/booking.actions";

import ItemInfo from "../item-info/item-info.component";

import "./booking-item.styles.scss";
import { ReactComponent as MoreArrow } from "../../assets/more-arrow.svg";

const BookingItem = ({ booking, toggleModalView }) => (
   <div className="booking-item col-12">
      <div className="booking-header">
         <div className="perfume-status">
            <div className="product-name">
               <div className="title">
                  <h3>{booking.name}</h3>
                  <div className="status performing">
                     <p>{booking.status}</p>
                  </div>
               </div>
               <div className="action">
                  <p onMouseEnter={() => toggleModalView(booking)} data-toggle="modal" data-target="#viewDetails">
                     Xem chi tiết
                  </p>
                  <MoreArrow />
               </div>
            </div>
         </div>
         <div className="row booking-info">
            <ItemInfo columnSize="col-4" title="Loại nước hoa:" value={booking.type} />
            <ItemInfo columnSize="col-4" title="Ngày đặt hàng:" value={booking.dateBooking} />
            <ItemInfo columnSize="col-4" title="Thời gian:" value={`${booking.timeStart} - ${booking.timeEnd}`} />
            <ItemInfo columnSize="col-4" title="Chi phí:" value={booking.fee} />
            <ItemInfo columnSize="col-4" title="Ngày hoàn thành:" value={booking.dateFinished} />
            <div className="col-4 expert-info">
               <div className="created-by">
                  <div className="expert-image">
                     <img src="https://i.ibb.co/5hGTMh7/person-4.jpg" alt="expert" />
                  </div>
                  <div className="info">
                     <span>Được tạo bởi</span>
                     <p>Victor Nguyen</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
);

const mapStateToProps = createStructuredSelector({
   toggleModal: selectToggleModal,
});

const mapDistpatchToProps = dispatch => ({
   toggleModalView: booking => dispatch(toggleModalView(booking)),
});

export default connect(mapStateToProps, mapDistpatchToProps)(BookingItem);
