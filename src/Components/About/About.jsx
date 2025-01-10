import React from 'react';

const About = () => {
  return (
    <div id="about">
      <div className="w-full mb-5 bg-[#00204A]  max-lg:min-h-0 min-h-screen flex justify-center items-center px-4 py-8">
        <div className="w-full max-w-screen-xl flex justify-center items-center gap-4 flex-col-reverse lg:flex-row">
          {/* Image Section */}
          <div className="relative  w-full px-5 lg:w-[45%] h-[300px] lg:h-[400px]">
            <img
              src="/about-img.png"
              alt="About Us"
              className="object-cover rounded-md  w-full h-full"
            />
          </div>
          
          {/* About Section */}
          <div className="w-full lg:w-[45%] flex flex-col justify-start items-center lg:items-start gap-5 p-4">
            <div className="flex justify-center items-center gap-2 flex-wrap">
              <h2 className="font-bold text-2xl text-white lg:text-4xl text-center lg:text-left">
                We Are Finexo
              </h2>
            </div>
            <p className="text-sm text-white lg:text-[17px] text-center lg:text-left">
              There are countless cryptocurrencies available, but not all are credible or secure. Many projects include exaggerated claims or unverified features, making them unreliable. It's essential to research thoroughly and ensure the cryptocurrency aligns with your goals. Prioritize security and transparency to protect your investments in the crypto space.
            </p>
            {/* Button */}
            <button
              className="
                bg-[#0A97B0] text-white animate-pulse text-sm lg:text-lg
                hover:bg-[#007FA4] hover:text-white
                border border-white rounded-l-[22px] rounded-tr-[22px]
                transition transform duration-300 ease-in-out
                px-5 py-2 lg:px-10 lg:py-2"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
