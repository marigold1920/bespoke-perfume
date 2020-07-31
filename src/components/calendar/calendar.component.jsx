import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Header from "../header/header.component";

import "./calendar.styles.scss";

class CalendarBoard extends React.Component {
    state = {
        current: new Date(),
    };

    render() {
        return (
            <div className="calendar-container">
                <div className="row">
                    <Header title="Hoạt động của bạn" />
                    <div className="calendar">
                        <Calendar locale="vi-VI" />
                    </div>
                </div>
            </div>
        );
    }
}

export default CalendarBoard;
