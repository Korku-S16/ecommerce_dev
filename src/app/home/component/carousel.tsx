"use client";
import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
  };

  const slideData = [
    {
      id: 1,
      image: "/Iphone.png",
      title: "Pro.Beyond.",
      mainTitle: "IPhone 14 Pro",
      description: "Created to change everything for the better. For everyone",
      buttonText: "Shop Now",
    },
    {
      id: 2,
      image: "/Iphone.png",
      title: "Pro.Beyond.",
      mainTitle: "IPhone 14 Pro",
      description: "Created to change everything for the better. For everyone",
      buttonText: "Shop Now",
    },
    {
      id: 3,
      image: "/Iphone.png",
      title: "Pro.Beyond.",
      mainTitle: "IPhone 14 Pro",
      description: "Created to change everything for the better. For everyone",
      buttonText: "Shop Now",
    },
  ];

  return (
    <div className="w-full bg-[#0a0a0a]">
      <Slider {...settings}>
        {slideData.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-[500px] bg-[#0a0a0a] text-white"
          >
            <div className="container mx-auto h-full flex items-center px-6 lg:px-20">
              <div className="w-1/2 space-y-4">
                <p className="text-gray-400 text-lg">{slide.title}</p>
                <h1 className="text-5xl font-light">
                  IPhone 14 <span className="font-bold">Pro</span>
                </h1>
                <p className="text-gray-300">{slide.description}</p>
                <button className="mt-4 border border-white px-6 py-2 text-white hover:bg-white hover:text-black transition-all">
                  {slide.buttonText}
                </button>
              </div>
              <div className="w-1/2 flex justify-end">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-[300px] lg:w-[380px] h-auto object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
