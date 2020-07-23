import React from "react";

import PopularPerfumeItem from "../newest-perfume-item/newest-perfume-item.component";
import Header from "../header/header.component";
import { perfumeApi } from "../../apis/api";

import "./newest-perfume.styles.scss";

class NewestPerfume extends React.Component {
    state = {
        newestPerfumes: [],
    };

    componentDidMount() {
        perfumeApi
            .get("/newest")
            .then(response => this.setState({ newestPerfumes: response.data }));
    }

    render() {
        const { newestPerfumes } = this.state;
        return newestPerfumes.length ? (
            <div className="newest-perfume">
                <div className="row">
                    <Header title="Newest Perfumes" action="See more" />
                    {newestPerfumes.map(({ perfumeId, ...otherProps }) => (
                        <PopularPerfumeItem key={perfumeId} {...otherProps} />
                    ))}
                </div>
            </div>
        ) : null;
    }
}

export default NewestPerfume;
