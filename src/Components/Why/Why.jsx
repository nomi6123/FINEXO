const cards = [
    {
      img: "/w1.png",
      title: "Expert Management",
      description:
        "Our team ensures top-tier management with a focus on efficiency and excellence to achieve your goals seamlessly.",
    },
    {
      img: "/w2.png",
      title: "Secure Investment",
      description:
        "We prioritize safety and growth, offering secure investment opportunities tailored to your financial needs.",
    },
    {
      img: "/w3.png",
      title: "Instant Trading",
      description:
        "Experience fast, reliable trading with our user-friendly platform, designed for instant transactions and results.",
    },
    {
      img: "/w4.png",
      title: "Happy Customers",
      description:
        "Customer satisfaction is our top priority, ensuring a seamless experience and support every step of the way.",
    },
  ];
  
  const Why = () => {
    return (
      <div id="why" className="w-full mb-1 min-h-screen flex flex-col items-center bg-gray-50">
        {/* Heading */}
        <h2 className="font-bold text-4xl mb-6 text-center px-4">
          Why Choose <span className="text-[#00BBF0]">Us</span>
        </h2>
        {/* Cards */}
        <div className="flex flex-col items-center gap-6 w-full px-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full max-w-[95%] bg-white shadow-md shadow-gray-400 rounded-lg p-6 flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="border-[5px] animate-upDown border-[#00204A] rounded-full w-fit p-5 mb-4">
                <img src={card.img} alt={card.title} className="w-24 h-24" />
              </div>
              {/* Title */}
              <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
              {/* Description */}
              <p className="text-gray-600 text-[18px]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Why;
  