import React from "react";

import "./input-box.styles.scss";

const InputBox = ({ handleLeave, placeholder, icon, ...otherProps }) => (
   <div className="input-box">
      <input className="input-text" type="text" placeholder={placeholder} {...otherProps} />
      <button className="box-btn">
         <i className={icon}></i>
      </button>
   </div>
);

export default InputBox;
