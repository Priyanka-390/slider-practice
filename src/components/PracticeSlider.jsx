
import { SLIDER_DATA_LIST } from "../utils/helper";
import img from "../assets/images/webp/img-1.webp"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PracticeSlider = () => {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
          slidesToScroll: 1,
        
      };

  return (
    <div className="">
      <Slider {...settings}>
        {SLIDER_DATA_LIST.map((data, i) => (
          <div key={i}>
           <img src={data} className="h-48 w-64" alt="images" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PracticeSlider
