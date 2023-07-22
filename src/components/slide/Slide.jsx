import React from "react";
import Slider from 'infinite-react-carousel';

const Slide = ({ slidesToShow, arrowsScroll, children }) => {
    return (
        <div className="flex justify-center py-12 mx-24">
            <div className="container mx-auto">
                <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} dots>
                    {children}
                </Slider>
            </div>
        </div>
    );
};

export default Slide;
