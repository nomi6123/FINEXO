import React from 'react';

const cards = [
  {
    img: "/s1.png",
    title: "Currency Wallet",
    description: "Manage and exchange currencies with ease using our secure and efficient wallet solutions.",
    btn: "Learn More",
  },
  {
    img: "/s2.png",
    title: "Security Storage",
    description: "Keep your data and assets safe with our cutting-edge storage security technologies.",
    btn: "Discover More",
  },
  {
    img: "/s3.png",
    title: "Expert Support",
    description: "Get round-the-clock expert assistance for all your technical and operational needs.",
    btn: "Contact Us",
  },
];

const Services = () => {
  return (
    <div id="services" className="w-full mb-1 min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-full max-w-[1300px] mx-auto">
        {/* Heading */}
        <div className="p-4 text-center">
          <h2 className="font-bold text-3xl mb-2">
            Our <span className="text-[#00BBF0]">Services</span>
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            We offer a range of professional services designed to simplify your life and enhance your business operations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-10 py-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg   shadow-lg p-6 flex flex-col items-center text-center h-full"
            >
              <img src={card.img} alt={card.title} className="animate-upDown w-24 h-24 object-contain mb-4" />
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{card.description}</p>
              <button
                className="px-6 py-2 border-2 border-blue-300 bg-[#00BBF0] text-white rounded-lg hover:bg-blue-500 hover:border-blue-500 transition duration-300"
              >
                {card.btn}
              </button>
            </div>
          ))}
        </div>  

        {/* Button */}
        <div className="mt-1 text-center">
          <button
            className="px-12 py-3 text-sm md:text-base bg-[#03A7D3] text-white font-semibold rounded-lg shadow-lg
                        transition duration-500 hover:bg-[#007FA4] hover:shadow-xl"
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
