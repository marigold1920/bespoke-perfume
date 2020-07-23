import React from "react";

// import PopularPerfume from "../../components/popular-perfume/popular-perfume.component";
import NewestPerfume from "../../components/newest-perfume/newest-perfume.component";

import "./home-page.styles.scss";

class HomePage extends React.Component {
    render() {
        return (
            <div className="home-page">
                <div className="row">
                    <div className="left-side col-lg-3 col-sm-12">
                        {/* <PopularPerfume /> */}
                        <NewestPerfume />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
