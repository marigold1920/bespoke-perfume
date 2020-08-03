import React from "react";

import "./perfume-booking-item.styles.scss";

const PerfumeBookingItem = ({ image, name, handleCancel, perfumeId, toggleModal }) => (
   <div className="perfume-item" data-tooltip={name}>
      {toggleModal ? (
         <span onClick={() => handleCancel(perfumeId)} aria-hidden="true">
            &times;
         </span>
      ) : null}
      <div className="image">
         <img src={image} alt="perfume" />
      </div>
   </div>
);

export default PerfumeBookingItem;
