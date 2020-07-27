import React from "react";

import NewestPerfumeItem from "../newest-perfume-item/newest-perfume-item.component";
import Header from "../header/header.component";
import { perfumeApi } from "../../apis/api";

import "./newest-perfume.styles.scss";

class NewestPerfume extends React.Component {
    state = {
        newestPerfumes: [],
    };

    componentDidMount() {
        perfumeApi
            .get("/newest?page=1")
            .then(response => this.setState({ newestPerfumes: response.data }));
    }

    render() {
        const { newestPerfumes } = this.state;
        return newestPerfumes.length ? (
            <div className="newest-perfume">
                <div className="row">
                    <Header title="Vừa cập nhật" action="Nhiều hơn nữa" />
                    <div className="overlap">
                        {newestPerfumes.map(({ perfumeId, ...otherProps }) => (
                            <NewestPerfumeItem
                                key={perfumeId}
                                {...otherProps}
                            />
                        ))}
                    </div>
                </div>
            </div>
        ) : null;
    }
}

export default NewestPerfume;
