import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { PiMapPinFill } from "react-icons/pi";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#00204A] pb-2">
      <div className="bg-[#00204A] p-10 md:p-[40px] py-10 w-full mx-auto max-w-[1300px] flex max-xl:flex-wrap justify-center items-center gap-8 text-white">
        {/* Address Section */}
        <div className="flex w-full md:w-[90%] lg:w-[20%] px-2 flex-col gap-6">
          <h2 className="font-bold text-2xl">Address</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <PiMapPinFill className="text-xl hover:text-blue-400 transition-transform duration-300 transform hover:scale-110" />
              <h4>Lohare Panjab Pakistan</h4>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-lg hover:text-blue-400 transition-transform duration-300 transform hover:scale-110" />
              <h4>Call: +033229999766</h4>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-lg hover:text-blue-400 transition-transform duration-300 transform hover:scale-110" />
              <a href="mailto:demo@gamil.com" className="text-lg">demo@gamil.com</a>
            </div>
          </div>
          <div className="flex mt-3 items-center gap-4">
            <FaFacebook className="text-2xl hover:text-blue-400 transition-transform duration-300 transform hover:scale-110" aria-label="Facebook" />
            <FaTwitter className="text-2xl hover:text-blue-400 transition-transform duration-300 transform hover:scale-110" aria-label="Twitter" />
            <FaYoutube className="text-2xl hover:text-blue-400 transition-transform duration-300 transform hover:scale-110" aria-label="YouTube" />
            <FaInstagram className="text-2xl hover:text-blue-400 transition-transform duration-300 transform hover:scale-110" aria-label="Instagram" />
          </div>
        </div>

        {/* Links Section */}
        <div className="text-white w-full  md:w-[90%] lg:w-[15%] px-2 justify-center items-start flex flex-col gap-3">
          <h2 className="font-bold text-3xl">Links</h2>
          {["Home", "About", "Services", "Team","Why"].map((link, index) => (
            <div key={index} className="flex justify-center items-center gap-2">
              <CiLocationArrow1 className="text-rose-600 rotate-45 text-2xl mt-1" />
              <a
                href={`#${link.toLowerCase()}`}
                className="text-xl font-semibold hover:text-blue-400 transition-all duration-300"
              >
                {link}
              </a>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="text-white w-full md:w-[90%] lg:w-[20%] px-2 flex flex-col gap-6">
          <h2 className="font-semibold text-2xl">Info</h2>
          <p className="font-semibold">
            Transport services ensure the efficient movement of people and
            goods, focusing on safety, convenience, and sustainability.
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="text-white w-full md:w-[90%] lg:w-[25%] px-2 flex flex-col gap-5">
          <h2 className="font-semibold text-2xl">Subscribe</h2>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Enter email"
              className="p-[7px] pr-5 font-semibold w-full outline-none bg-transparent text-white placeholder:text-white"
            />
            <hr />
            <button
              className="flex items-center uppercase justify-center w-fit px-[95px] py-2 mt-2 text-sm md:text-base lg:text-lg 
                bg-[#0A97B0] text-white border border-transparent font-bold 
                hover:bg-transparent hover:text-white hover:border-[#0A97B0] 
                transition duration-500"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="px-[150px]">
        <hr />
      </div>
      <p className="text-center p-3 text-white text-xl mt-4">
        © 2024 All Rights Reserved. Design by Front-End developer Muhammad
        Noman.
      </p>
    </div>
  );
};

export default Footer;
