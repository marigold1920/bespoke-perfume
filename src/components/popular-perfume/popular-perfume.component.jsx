import React from "react";

import { perfumeApi } from "../../apis/api";

import Header from "../header/header.component";
import PopularPerfumeItem from "../popular-perfume-item/popular-perfume-item.component";
import "./popular-perfume.styles.scss";

class PopularPerfume extends React.Component {
    state = {
        popularPerfumes: [],
    };

    componentDidMount() {
        perfumeApi
            .get("/popular")
            .then(response =>
                this.setState({ popularPerfumes: response.data })
            );
    }

    render() {
        const { popularPerfumes } = this.state;
        return popularPerfumes.length ? (
            <div className="popular-perfume">
                <Header title="Nước hoa phổ biến" action="See more" />
                <div className="items">
                    {popularPerfumes.map(({ perfumeId, ...otherProps }) => (
                        <PopularPerfumeItem key={perfumeId} {...otherProps} />
                    ))}
                </div>
            </div>
        ) : null;
    }
}

export default PopularPerfume;
