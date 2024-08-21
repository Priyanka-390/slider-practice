import React, { useState, useEffect, useRef } from "react";
import { SLIDER_DATA_LIST } from "../utils/helper";
import { LeftArrow, RightArrow } from "./common/Icons";

function TabSlider() {
  const [activeTab, setActiveTab] = useState(0);
  const [fade, setFade] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const sliderRef = useRef(null);

  const handleTabClick = (index) => {
    if (index !== activeTab) {
      triggerFade(() => setActiveTab(index));
    }
  };

  const handlePrevClick = () => {
    triggerFade(() =>
      setActiveTab((prevTab) =>
        prevTab === 0 ? SLIDER_DATA_LIST.length - 1 : prevTab - 1
      )
    );
  };

  const handleNextClick = () => {
    triggerFade(() =>
      setActiveTab((prevTab) =>
        prevTab === SLIDER_DATA_LIST.length - 1 ? 0 : prevTab + 1
      )
    );
  };

  const triggerFade = (callback) => {
    setFade(true);
    setTimeout(() => {
      callback();
      setFade(false);
    }, 300); 
  };

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      handleNextClick();
    }, 3000); 

    return () => clearInterval(autoplayInterval);
  }, [activeTab]);

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const diffX = e.clientX - startX;
    if (diffX > 50) {
      handlePrevClick();
      setDragging(false);
    } else if (diffX < -50) {
      handleNextClick();
      setDragging(false);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <div className="-mt-28 mb-14 relative">
      <button
        onClick={handlePrevClick}
        className="absolute left-[5%] top-[63%] transform -translate-y-1/2 p-2 bg-transparent border-2 border-black hover:bg-gray-400 rounded-full z-20"
      >
        <LeftArrow />
      </button>
      <button
        onClick={handleNextClick}
        className="absolute right-[5%] top-[63%] transform -translate-y-1/2 p-2 bg-transparent border-2 border-black hover:bg-gray-400 rounded-full z-20"
      >
        <RightArrow />
      </button>
      <div
        className="tab-slider-container max-w-[1140px] mx-auto -mt-20 mb-14 relative"
        ref={sliderRef}
      >
        <h2 className="font-extralight pb-5 underline italic font-mono text-center md:text-7xl sm:text-6xl text-5xl">
          TABS SLIDER
        </h2>

        <div className="tabs flex justify-center space-x-4 mb-8">
          {SLIDER_DATA_LIST.map((data, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)}
              className={`py-2 px-4 transition-all duration-300 ${
                activeTab === index
                  ? "border-black scale-125"
                  : "border-transparent"
              }`}
            >
              <img
                src={data}
                alt={`Tab ${index + 1}`}
                className={`h-24 w-40 object-cover rounded-3xl transition-all duration-300 ${
                  activeTab === index
                    ? "border-4 border-black opacity-100"
                    : "border-2 border-transparent opacity-90"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="slider-content flex justify-center items-center max-w-[1140px] mx-auto">
          <img
            src={SLIDER_DATA_LIST[activeTab]}
            className={`h-96 w-[1000px] object-cover transition-opacity duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            } border-4 border-black`}
            alt={`Tab ${activeTab + 1} image`}
          />
        </div>
      </div>
    </div>
  );
}

export default TabSlider;
