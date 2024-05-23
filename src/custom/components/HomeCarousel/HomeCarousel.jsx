import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import MainCarouselData from "./MainCarouselData";

const HomeCarousel = () => {
    const items = MainCarouselData.map((item, index) => (
        <div key={index} className="item">
            <img className="cursor-pointer" src={item.image} alt={`carousel-item-${index}`} />
        </div>
    ));

    return (
        <AliceCarousel
            disableButtonsControls
            autoPlay
            autoPlayInterval={2000}
            infinite
            items={items}
            controlsStrategy="alternate"
        />
    );
};

export default HomeCarousel;
