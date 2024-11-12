import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
    <div className="item" data-value="1">
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1957c92d54dccbb8.jpg?q=20 " alt="" />
    </div>,
    <div className="item" data-value="2">
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1316eb53d6f52c71.jpg?q=20" alt="" /></div>,
    <div className="item" data-value="3">
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/583b2ae9f3f8b334.jpg?q=20" alt="" /></div>,
    <div className="item" data-value="4">
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/dfb8c0e38eb08bce.jpg?q=20" alt="" /></div>,
    <div className="item" data-value="5"><img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/d2c0067872bc9eea.png?q=20" alt="" /></div>,
];

const HomeCarousel = () => (
    <div className='z--10'>

    <AliceCarousel
        autoPlay
        disableautoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={2000}
        animationDuration={2000}
        animationType="fadeout"
        infinite
        touchTracking={true}
        DotsControls
        disableButtonsControls
        items={items}

    />
    </div>
);
export default HomeCarousel;

