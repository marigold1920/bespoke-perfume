import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectToken } from "../../redux/user/user.selectors";

import NotificationBoard from "../../components/notificaton-board/notificaton-board.component";
import CalendarBoard from "../../components/calendar/calendar.component";
import RecommendedPerfume from "../../components/recommended-perfume/recommended-perfume.component";
import Chatbox from "../../components/chatbox/chatbox.component";
import Banner from "../../components/banner/banner.component";
import Booking from "../../components/booking/booking.component";

import "./home-page.styles.scss";

class HomePage extends React.Component {
    render() {
        const { token } = this.props;
        return token !== "" ? (
            <div className="home-page">
                <div className="row">
                    <div className="left-box col-lg-3 col-sm-12">
                        <CalendarBoard />
                        <NotificationBoard />
                    </div>
                    <div className="center-box col-lg-6 col-sm-12">
                        <Banner />
                        <Booking />
                    </div>
                    <div className="right-box col-lg-3 col-sm-12">
                        <RecommendedPerfume />
                        <Chatbox />
                    </div>
                </div>
            </div>
        ) : (
            <Redirect to="/" />
        );
    }
}

const mapStateToProps = createStructuredSelector({
    token: selectToken,
});

export default connect(mapStateToProps)(HomePage);
