import React from "react";

import Header from "../header/header.component";
import RecommendedPerfumeItem from "../recommended-perfume-item/recommended-perfume-item.component";

import "./recommended-perfume.styles.scss";

class RecommendedPerfume extends React.Component {
    state = {
        recommendedPerfumes: [
            {
                id: 1,
                name: "Xinú Aguamadera",
                image: "https://fimgs.net/mdimg/perfume/m.44916.jpg",
                longevity: "29",
                sillage: "15",
            },
            {
                id: 2,
                name: "Voluspa Flora de Mare",
                image: "https://fimgs.net/mdimg/perfume/m.26420.jpg",
                longevity: "29",
                sillage: "15",
            },
            {
                id: 3,
                name: "Orto Parisi Brutus",
                image: "https://fimgs.net/mdimg/perfume/m.24194.jpg",
                longevity: "29",
                sillage: "15",
            },
            {
                id: 4,
                name: "Fragonard Zizanie",
                image: "https://fimgs.net/mdimg/perfume/m.7379.jpg",
                longevity: "29",
                sillage: "15",
            },
            {
                id: 5,
                name: "Hugo Boss BOSS The Collection Cashmere & Patchouli",
                image: "https://fimgs.net/mdimg/perfume/m.12261.jpg",
                longevity: "29",
                sillage: "15",
            },
            {
                id: 5,
                name: "Hugo Boss BOSS The Collection Cashmere & Patchouli",
                image: "https://fimgs.net/mdimg/perfume/m.12261.jpg",
                longevity: "29",
                sillage: "15",
            },
            {
                id: 6,
                name: "Hugo Boss BOSS The Collection Cashmere & Patchouli",
                image: "https://fimgs.net/mdimg/perfume/m.12261.jpg",
                longevity: "29",
                sillage: "15",
            },
            {
                id: 7,
                name: "Hugo Boss BOSS The Collection Cashmere & Patchouli",
                image: "https://fimgs.net/mdimg/perfume/m.12261.jpg",
                longevity: "29",
                sillage: "15",
            },
            {
                id: 8,
                name: "Hugo Boss BOSS The Collection Cashmere & Patchouli",
                image: "https://fimgs.net/mdimg/perfume/m.12261.jpg",
                longevity: "29",
                sillage: "15",
            },
            {
                id: 9,
                name: "Hugo Boss BOSS The Collection Cashmere & Patchouli",
                image: "https://fimgs.net/mdimg/perfume/m.12261.jpg",
                longevity: "29",
                sillage: "15",
            },
        ],
    };

    render() {
        const { recommendedPerfumes } = this.state;
        return (
            <div className="recommended-perfume">
                <div className="row">
                    <Header title="Có thể bạn sẽ thích" />
                    <div className="recommended-overlap">
                        {recommendedPerfumes.map(({ id, ...otherProps }) => (
                            <RecommendedPerfumeItem key={id} {...otherProps} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default RecommendedPerfume;
