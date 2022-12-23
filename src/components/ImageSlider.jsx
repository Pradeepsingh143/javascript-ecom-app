import React, { useState } from "react";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import { BsDot } from "react-icons/bs";

const ImageSlider = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slideStyle = {
    backgroundImage: `url(${slides[currentSlideIndex].url})`,
  };

  const slideDots = {
    display: 'flex',
    position:'absolute',
    left:'50%', 
    bottom: '0',
    transform:'translate(-50%, -50%)',
  }

  return (
    // slider styles``
    <div className="slider h-full w-full relative">
      {/* slide style */}
      <div
        className="slide w-full bg-cover bg-center h-full"
        style={slideStyle}
        title={slides[currentSlideIndex].title}
      >
        <BiLeftArrow
          color="var(--white)"
          size={"24px"}
          className="absolute top-2/4 left-4 cursor-pointer"
          onClick={() =>
            currentSlideIndex === 0
              ? setCurrentSlideIndex(slides.length - 1)
              : setCurrentSlideIndex(currentSlideIndex - 1)
          }
        />
        <BiRightArrow
          color="var(--white)"
          size={"24px"}
          className="absolute top-2/4 right-4 cursor-pointer"
          onClick={() =>
            currentSlideIndex === slides.length - 1
              ? setCurrentSlideIndex(0)
              : setCurrentSlideIndex(currentSlideIndex + 1)
          }
        />
      </div>
      <div style={slideDots}>
        {slides.map((_slide, index)=>(
            <div key={index}>
                <BsDot size={'36px'} color={'var(--white)'}
                className="cursor-pointer"
                onClick={
                    ()=> setCurrentSlideIndex(index)
                }
                />
            </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
