import React from "react";
import DatePicker from "react-date-picker";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { SemipolarLoading } from "react-loadingg";

import { bookingApi } from "../../apis/api";
import {
   selectBookingFromStore,
   selectIsSlotReload,
   selectToggleModal,
   selectBookingForView,
   selectIsSubmit,
} from "../../redux/booking/booking.selectors";
import {
   changeSlot,
   changeBooking,
   changeSlotReload,
   addNewPerfume,
   removePerfume,
   toggleSubmit,
} from "../../redux/booking/booking.actions";

import Dropdown from "../dropdown/dropdown.component";
import FormInputBooking from "../form-input-booking/form-input-booking.component";
import PerfumeBookingItem from "../perfume-booking-item/perfume-booking-item.component";
import InputBox from "../input-box/input-box.component";

import "./booking-modal.styles.scss";

class BookingModal extends React.Component {
   state = {
      slots: [],
      recommendedPerfumes: [
         "The Body Shop Patchouli",
         "Yves Rocher Nouveau Genre",
         "Jeanne Arthes Arthes Essential Patchouli Sumatra",
         "Orto Parisi Brutus",
         "Dolce&Gabbana Velvet Patchouli",
         "Santa Maria Novella Patchouli",
         "Voluspa Flora de Mare",
         "Abdul Karim Al Faransi Abyss",
         "Demeter Fragrance Scottish Shortbread",
         "Demeter Fragrance Cinnamon Toast",
         "Ganache Parfums Cinnalicious",
      ],
      keySearch: "",
   };

   triggerElement = null;

   componentDidMount() {
      this.handleDateChange(new Date().toISOString());
   }

   handleChange = event => {
      const { name, value } = event.target;
      this.props.changeBooking(name, value);
   };

   handleSubmit = () => {
      this.props.toggleSubmit();
      const { name, type, age, gender, style, typePerfume, dateBooking, timeBookingId, note } = this.props.booking;
      bookingApi
         .post("/bookings/create", {
            userId: "kemquhuyy",
            customerName: name,
            makeAppointmentDate: dateBooking.toISOString().split("T")[0],
            timeBookingId: timeBookingId,
            noteFromExpert: note,
            type: type,
            status: "Đã xác nhận",
            perfumeId: [2, 10, 11],
            customerProfile: {
               age: age,
               style: style,
               gender: gender,
               typePerfume: typePerfume,
            },
         })
         .then(response => {
            if (response.status === 200) {
               this.triggerElement.click();
               this.handleDateChange(new Date().toISOString());
            }
         });
   };

   handleSearch = event => {
      const { value } = event.target;
      this.setState({ keySearch: value });
   };

   handleDateChange = async event => {
      this.props.changeSlotReload();
      this.props.changeBooking("dateBooking", new Date(event));
      const response = await bookingApi.get(`/timebookings/${new Date(event).toISOString().split("T")[0]}`);
      if (response.status === 200) {
         this.setState({
            slots: response.data,
         });
         this.props.changeSlot(response.data.length ? response.data[0].timeBookingId : 0);
      }
   };

   renderModalHeader = () => (
      <div className="modal-header">
         <h5 className="modal-title" id="exampleModalLabel">
            {this.props.title}
         </h5>
         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
         </button>
      </div>
   );

   renderModalFooter = () => (
      <div className="modal-footer">
         <button
            ref={el => (this.triggerElement = el)}
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
            onClick={this.props.handleOnClose}
         >
            Đóng
         </button>
         {this.props.toggleModal ? (
            <div className="action-btn">
               <button onClick={this.handleSubmit} type="button" className="btn btn-primary">
                  {this.props.action}
               </button>
               {this.props.isSubmit ? <SemipolarLoading /> : null}
            </div>
         ) : null}
      </div>
   );

   renderBody = () => {
      const { slots, recommendedPerfumes, keySearch } = this.state;
      const { isSlotReload, toggleModal } = this.props;
      const filteredPerfumes = recommendedPerfumes.filter(perfume =>
         perfume.toLowerCase().includes(keySearch.toLowerCase())
      );
      const displayBooking = toggleModal ? this.props.booking : this.props.bookingView;
      const {
         bookingId,
         name,
         type,
         age,
         gender,
         typePerfume,
         perfumeName,
         style,
         dateBooking,
         timeBookingId,
         note,
         perfumes,
         timeStart,
         timeEnd,
      } = displayBooking;
      return (
         <div className="modal-body">
            <div className={`information ${toggleModal ? "" : "disabled-content"}`}>
               <div className="basic-info">
                  <div className="left-side">
                     <div className="group-dropdown">
                        <Dropdown
                           handleChange={this.handleChange}
                           options={[
                              { id: "Nam", value: "Nam" },
                              { id: "Nữ", value: "Nữ" },
                              { id: "Khác", value: "Khác" },
                           ]}
                           name="gender"
                           value={gender}
                           label="Giới tính"
                        />
                        <FormInputBooking
                           key={"key_1" + bookingId}
                           label="Tuổi"
                           type="number"
                           name="age"
                           value={age}
                           handleChange={this.handleChange}
                           required
                        />
                     </div>
                     <FormInputBooking
                        key={"key_2" + bookingId}
                        label="Phong cách nước hoa"
                        type="text"
                        name="style"
                        value={style}
                        handleChange={this.handleChange}
                        required
                     />
                     <FormInputBooking
                        key={"key_3" + bookingId}
                        label="Tên nước hoa"
                        type="text"
                        name="perfumeName"
                        value={perfumeName}
                        handleChange={this.handleChange}
                     />
                  </div>
                  <div className="right-side">
                     <FormInputBooking
                        key={"key_4" + bookingId}
                        label="Tên đầy đủ"
                        type="text"
                        name="name"
                        value={name}
                        handleChange={this.handleChange}
                        required
                     />
                     <FormInputBooking
                        key={"key_5" + bookingId}
                        label="Hình thức đơn hàng"
                        type="text"
                        name="type"
                        value={type}
                        handleChange={this.handleChange}
                        required
                     />
                     <Dropdown
                        label="Thể tích"
                        name="typePerfume"
                        handleChange={this.handleChange}
                        options={[
                           { id: "25ml", value: "25ml" },
                           { id: "50ml", value: "50ml" },
                           { id: "100ml", value: "100ml" },
                        ]}
                        display={typePerfume}
                     />
                  </div>
               </div>
               <div className="extra-info">
                  <div className="note">
                     <label>Ghi chú</label>
                     <textarea
                        key={"key_6" + bookingId}
                        onChange={this.handleChange}
                        value={note}
                        name="note"
                     ></textarea>
                  </div>
                  {dateBooking ? (
                     <div className="time-booking">
                        <div className="date">
                           <label>Ngày hẹn</label>
                           <DatePicker
                              locale="vi-VI"
                              clearIcon={null}
                              value={typeof dateBooking === "string" ? new Date(dateBooking) : dateBooking}
                              onChange={this.handleDateChange}
                           />
                        </div>
                        {!isSlotReload ? (
                           <div>
                              {timeBookingId ? (
                                 <div className="slot">
                                    <Dropdown
                                       options={slots.map(slot =>
                                          Object.defineProperties(
                                             {},
                                             {
                                                id: {
                                                   value: slot.timeBookingId,
                                                },
                                                value: {
                                                   value: slot.timeStart,
                                                },
                                             }
                                          )
                                       )}
                                       name="timeBookingId"
                                       display={
                                          toggleModal
                                             ? slots.find(slot => slot.timeBookingId === Number(timeBookingId))
                                                  .timeStart
                                             : timeStart
                                       }
                                       handleChange={this.handleChange}
                                       label="Giờ bắt đầu"
                                    />
                                    <Dropdown
                                       options={slots.map(slot =>
                                          Object.defineProperties(
                                             {},
                                             {
                                                id: {
                                                   value: slot.timeBookingId,
                                                },
                                                value: {
                                                   value: slot.timeEnd,
                                                },
                                             }
                                          )
                                       )}
                                       name="timeBookingId"
                                       display={
                                          toggleModal
                                             ? slots.find(slot => slot.timeBookingId === Number(timeBookingId)).timeEnd
                                             : timeEnd
                                       }
                                       handleChange={this.handleChange}
                                       label="Giờ kết thúc"
                                    />
                                 </div>
                              ) : (
                                 <div className="empty-slot-message">
                                    <p>Không tìm thấy thời gian thích hợp! Vui lòng chọn ngày khác!</p>
                                 </div>
                              )}
                           </div>
                        ) : (
                           <div className="loading">
                              <SemipolarLoading />
                           </div>
                        )}
                     </div>
                  ) : null}
               </div>
            </div>
            <div className="perfumes">
               <div className="perfumes-header">
                  <label>Nước hoa đã chọn</label>
                  {toggleModal ? (
                     <div className="recommender">
                        <InputBox
                           onChange={this.handleSearch}
                           placeholder="Tên nước hoa..."
                           icon="fa fa-plus"
                           value={keySearch}
                           required
                        />
                        {keySearch ? (
                           <div className="recommended-perfumes">
                              {filteredPerfumes.map((perfume, index) => (
                                 <span key={index}>{perfume}</span>
                              ))}
                           </div>
                        ) : null}
                     </div>
                  ) : null}
               </div>
               <div className="list">
                  {perfumes.map(({ perfumeFragranticaId, ...otherProps }) => (
                     <PerfumeBookingItem
                        key={perfumeFragranticaId}
                        perfumeId={perfumeFragranticaId}
                        toggleModal={toggleModal}
                        {...otherProps}
                        handleCancel={this.props.removePerfume}
                     />
                  ))}
               </div>
            </div>
         </div>
      );
   };

   render() {
      const { target } = this.props;
      return (
         <div className="modal fade" id={target} tabIndex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
               <div className="modal-content">
                  {this.renderModalHeader()}
                  {this.renderBody()}
                  {this.renderModalFooter()}
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = createStructuredSelector({
   booking: selectBookingFromStore,
   bookingView: selectBookingForView,
   isSlotReload: selectIsSlotReload,
   toggleModal: selectToggleModal,
   isSubmit: selectIsSubmit,
});

const mapDispatchToProps = dispatch => ({
   changeSlot: timeBookingId => dispatch(changeSlot(timeBookingId)),
   changeBooking: (name, value) => dispatch(changeBooking(name, value)),
   changeSlotReload: () => dispatch(changeSlotReload()),
   addNewPerfume: perfumeId => dispatch(addNewPerfume(perfumeId)),
   removePerfume: perfumeId => dispatch(removePerfume(perfumeId)),
   toggleSubmit: () => dispatch(toggleSubmit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
