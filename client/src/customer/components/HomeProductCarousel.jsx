import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import ProductCard from './ProductCard';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const HomeProductCarousel = ({data,SectionName}) => {
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1.5 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const items = data.slice(0, 10).map((item) => (
    <ProductCard product={item} key={item.id} />
  ));

  const slidePrev = () => carouselRef.current?.slidePrev();
  const slideNext = () => carouselRef.current?.slideNext();

  return (
    <div className='relative px-3 py-6 mb-16 border-t-2 border-gray-300 lg:px-8'>
      <div className='relative px-3'>
        <h2 className='text-2xl font-semibold mb-4'>{SectionName}</h2>
        <div className="relative">
          <AliceCarousel
            ref={carouselRef}
            disableDotsControls
            autoPlay={false} // Disable autoplay
            infinite
            disableButtonsControls
            items={items}
            responsive={responsive}
          />
          {/* Left Arrow */}
          <button
            className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg'
            onClick={slidePrev}
          >
            <AiOutlineLeft size={24} />
          </button>
          {/* Right Arrow */}
          <button
            className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg'
            onClick={slideNext}
          >
            <AiOutlineRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeProductCarousel;
