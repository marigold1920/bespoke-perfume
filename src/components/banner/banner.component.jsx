import React from "react";

import Carousel from "nuka-carousel";

import "./banner.styles.scss";

const Banner = () => (
    <div className="banner">
        <Carousel autoplay autoplayInterval="3000">
            <img src="https://i.ibb.co/hgMQgQ7/shop-banner.jpg" alt="banner" />
            <img
                src="https://i.ibb.co/VHV0Mcd/Perfume-Banner1.png"
                alt="banner"
            />
            <img
                src="https://i.ibb.co/HV885Sg/Perfume-Banner2.png"
                alt="banner"
            />
            <img
                src="https://i.ibb.co/fnq52L3/Perfume-Banner3.png"
                alt="banner"
            />
            <img
                src="https://i.ibb.co/BKVKg3P/Perfume-Banner4.png"
                alt="banner"
            />
        </Carousel>
    </div>
);

export default Banner;
