import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { SLIDER_DATA_LIST } from "../utils/helper";

function SliderComponent() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

    const settingsForNav = {
      slidesToShow: 4.5,
      infinite: true, // This replaces loop
      centerMode: true,
      arrows: true,
      centerPadding: "20px",
      swipeToSlide: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            centerPadding: "20px",
            slidesToShow: 4.5,
            slidesToScroll: 1,
            centerMode: true,
          },
        },
        {
          breakpoint: 1240,
          settings: {
            centerPadding: "20px",
            slidesToShow: 3.5,
            centerMode: true,
          },
        },
        {
          breakpoint: 994,
          settings: {
            slidesToShow: 3,
            centerPadding: "20px",
            centerMode: true,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.6,
            centerPadding: "20px",
            centerMode: true,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1.5,
            centerPadding: "30px",
            centerMode: true,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            centerPadding: "30px",
            centerMode: true,
            arrows: false,
            dots: true,
          },
        },
      ],
    };

  return (
    <div className="max-w-[1440px] px-4 mx-auto">
      <div className="slider-container min-h-screen my-10">
        <Slider
          arrows={false}
          className="flex justify-center items-center max-w-[1140px] mx-auto"
          asNavFor={nav2}
          ref={(slider) => (sliderRef1 = slider)}
        >
          {SLIDER_DATA_LIST.map((data, i) => (
            <div
              key={i}
              className="flex justify-center items-center max-w-[1140px] mx-auto"
            >
              <img
                src={data}
                className="h-96 w-[1100px] rounded-2xl object-cover"
                alt="images"
              />
            </div>
          ))}
        </Slider>
        <div id="sec">
          <Slider
            className="flex justify-center items-center max-w-[1440px] mx-auto"
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
            {...settingsForNav} // Apply settings
          >
            {SLIDER_DATA_LIST.map((data, i) => (
              <div key={i}>
                <img
                  src={data}
                  className="lg:min-h-48 rounded-xl lg:min-w-64 lg:h-48 h-36 w-52 md:w-64"
                  alt="images"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SliderComponent;
