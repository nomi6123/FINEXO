import React from 'react';

const cards = [
  {
    img: "/team-1.jpg",
    title: "Joseph Brown",
    description: "Marketing Head",
  },
  {
    img: "/team-2.jpg",
    title: "Nancy White",
    description: "Marketing Head",
  },
  {
    img: "/team-3.jpg",
    title: "Earl Martinez",
    description: "Marketing Head",
  },
  {
    img: "/team-4.jpg",
    title: "Josephine Allard",
    description: "Marketing Head",
  },
];

const Team = () => {
  return (
    <div>
      <div id="team" className="w-full p-5 min-h-screen flex flex-col justify-center items-center bg-[#00204A]">
        {/* Heading */}
        <h2 className="font-bold text-4xl text-white mb-6 text-center px-4">
          Our <span className="text-[#00BBF0]">Team</span>
        </h2>
        {/* Cards */}
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#00285C] shadow-md py-8  shadow-black rounded-lg p-8 flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="border-[5px] animate-upDown border-white rounded-full w-fit mb-4">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-[#00ADCB]">{card.title}</h3>
              {/* Description */}
              <p className="font-semibold text-[18px] text-white mb-4">{card.description}</p>
              {/* Social Icons */}
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="text-white hover:text-[#00BBF0] text-xl"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#00BBF0] text-xl"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#00BBF0] text-xl"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#00BBF0] text-xl"
                  aria-label="YouTube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#00BBF0] text-xl"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
