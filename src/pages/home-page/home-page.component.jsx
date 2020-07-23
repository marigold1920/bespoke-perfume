import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectToken } from "../../redux/user/user.selectors";

import PopularPerfume from "../../components/popular-perfume/popular-perfume.component";
import NewestPerfume from "../../components/newest-perfume/newest-perfume.component";
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
                        <NewestPerfume />
                        <PopularPerfume />
                    </div>
                    <div className="center-box col-lg-6 col-sm-12">
                        <Banner />
                        <Booking />
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
