import React from "react";
import Loading from "../loading/loading.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { bookingApi } from "../../apis/api";
import { selectToggleModal, selectIsSubmit } from "../../redux/booking/booking.selectors";
import { toggleModalCreate, clearBooking, toggleSubmit } from "../../redux/booking/booking.actions";

import BookingItem from "../booking-item/booking-item.component";
import EmptyMessage from "../empty-message/empty-message.component";
import InputBox from "../input-box/input-box.component";
import BookingModal from "../booking-modal/booking-modal.component";

import "./booking.styles.scss";

class Booking extends React.Component {
   state = {
      bookings: null,
   };

   componentDidMount() {
      this.initBooking();
   }

   initBooking = () => {
      bookingApi.get("/bookings").then(response =>
         this.setState({
            bookings: response.status === 200 ? response.data : [],
         })
      );
   };

   handleOnClose = () => {
      if (this.props.isSubmit) {
         this.setState({ bookings: null });
         this.props.clearBooking();
         this.props.toggleSubmit();
         this.initBooking();
      }
   };

   renderActions = () => (
      <div className="booking-actions">
         <div className="header">
            <h3>Đơn hàng của bạn</h3>
         </div>
         <div className="create-booking">
            <button
               onMouseEnter={() => this.props.toggleModalCreate()}
               className="plus"
               data-toggle="modal"
               type="button"
               data-target="#create"
            >
               <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
         </div>
         <InputBox placeholder="Tìm kiếm..." icon="fas fa-search" required />
         <div className="time-range"></div>
      </div>
   );

   renderBookings = bookings => (
      <div>
         {bookings ? (
            <div className="booking-overlap">
               {bookings.map(booking => (
                  <BookingItem key={booking.bookingId} booking={booking} />
               ))}
               {!bookings.length ? <EmptyMessage message="Không có đơn hàng nào!" /> : null}
            </div>
         ) : (
            <Loading />
         )}
      </div>
   );

   render() {
      const { bookings } = this.state;
      const { toggleModal } = this.props;
      return (
         <div className="booking">
            {this.renderActions()}
            {this.renderBookings(bookings)}
            {toggleModal ? (
               <BookingModal
                  title="Tạo  mới đơn hàng"
                  target="create"
                  action="Tạo đơn hàng"
                  handleOnClose={this.handleOnClose}
               />
            ) : (
               <BookingModal title="Chi tiết đơn hàng" target="viewDetails" />
            )}
         </div>
      );
   }
}

const mapStateToProps = createStructuredSelector({
   toggleModal: selectToggleModal,
   isSubmit: selectIsSubmit,
});

const mapDistpatchToProps = dispatch => ({
   toggleModalCreate: () => dispatch(toggleModalCreate()),
   clearBooking: () => dispatch(clearBooking()),
   toggleSubmit: () => dispatch(toggleSubmit()),
});

export default connect(mapStateToProps, mapDistpatchToProps)(Booking);
