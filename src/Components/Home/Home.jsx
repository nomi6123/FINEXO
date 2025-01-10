import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css"; // Add your CSS file here

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div id="home">
      <div className="bg-[url(/hero-bg.png)] bg-cover bg-right-bottom w-full max-md:min-h-0 max-lg:min-h-[95vh] min-h-[115vh] flex justify-center items-center">
        {/* Center div */}
        <div className="w-full max-w-[1300px] mx-auto p-5 flex flex-wrap justify-center items-center gap-4">
          {/* Home content */}
          <div className="w-full md:w-[50%] lg:w-[40%] p-6 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h2 className="font-bold text-2xl sm:text-3xl lg:text-5xl uppercase text-white mb-4 sm:mb-6">
              Crypto
              <br /> Currency
            </h2>
            <p className="tracking-tighter leading-tight text-white text-sm sm:text-base lg:text-lg">
              Experience seamless cryptocurrency transactions with unparalleled
              security and efficiency. Say goodbye to errors and delays—embrace
              innovative solutions designed to meet your needs effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button
                className="w-full  sm:w-auto text-nowrap px-12 py-2 text-sm md:text-base bg-[#03A7D3] text-white font-semibold
                      transition duration-500 hover:bg-[#007FA4] hover:text-white border border-blue-500"
              >
                Read More
              </button>
            </div>
          </div>
          {/* Slick Slider */}
          <div className="w-full md:w-[45%] p-4">
            <Slider {...settings}>
              <div className="animate-upDown">
                <img src="/slider-img.png" alt="Slider Image 1" />
              </div>
              <div className="animate-upDown">
                <img src="/slider-img.png" alt="Slider Image 2" />
              </div>
              <div className="animate-upDown">
                <img src="/slider-img.png" alt="Slider Image 3" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
