import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSmallerCard from '../HomeSmallerCard/HomeSmallerCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

function HomeSmallerCarousel({data,sectionName}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);
    const itemsToShow = 5.5;
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: itemsToShow },
    };

    const slidePrev = () => {
        const newIndex = Math.max(activeIndex - 1, 0);
        setActiveIndex(newIndex);
        carouselRef.current.slideTo(newIndex);
    };

    const slideNext = () => {
        const newIndex = Math.min(activeIndex + 1, data.length - itemsToShow);
        setActiveIndex(newIndex);
        carouselRef.current.slideTo(newIndex);
    };

    const handleActiveIndex = ({ item }) => setActiveIndex(item);

    const items = data.slice(0, 15).map((item, index) => (
        <HomeSmallerCard key={index} product={item} />
    ));

    return (
        <div className='relative pl-5 lg:pl-12'>
              <h2 className='text-2xl font-bold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5'>
                <AliceCarousel
                    ref={carouselRef}
                    
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControls
                    items={items}
                    onSlideChanged={handleActiveIndex}
                    activeIndex={activeIndex}
                />
            </div>
            {activeIndex < items.length - itemsToShow && (
                <button
                    onClick={slideNext}
                    className='z-50'
                    style={{
                        position: 'absolute',
                        top: '8rem',
                        right: '0rem',
                        transform: 'translateX(-50%) rotate(90deg)',
                        background: 'white',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                    aria-label="next"
                >
                    <KeyboardArrowLeftIcon style={{ transform: 'rotate(90deg)' }} />
                </button>
            )}
            {activeIndex > 0 && (
                <button
                    onClick={slidePrev}
                    className='z-50'
                    style={{
                        position: 'absolute',
                        top: '8rem',
                        left: '0rem',
                        transform: 'translateX(50%) rotate(-90deg)',
                        background: 'white',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                    aria-label="previous"
                >
                    <KeyboardArrowLeftIcon style={{ transform: 'rotate(90deg)' }} />
                </button>
            )}
        </div>
    );
}

export default HomeSmallerCarousel;
