import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Header from "../header/header.component";

import "./calendar.styles.scss";

const CalendarBoard = () => (
    <div className="calendar-container">
        <Header title="Hoạt động của bạn" />
        <div className="calendar">
            <Calendar locale="vi-VI" />
        </div>
    </div>
);

export default CalendarBoard;
