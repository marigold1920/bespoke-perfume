import React from "react";

import PopularPerfume from "../../components/popular-perfume/popular-perfume.component";
import NewestPerfume from "../../components/newest-perfume/newest-perfume.component";
import Banner from "../../components/banner/banner.component";

import "./home-page.styles.scss";

class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page">
                <div className="row">
                    <div className="left-box col-lg-3 col-sm-12">
                        <NewestPerfume />
                        <PopularPerfume />
                    </div>
                    <div className="center-box col-lg-6 col-sm-12">
                        <Banner />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
