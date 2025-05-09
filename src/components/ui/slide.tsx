import React from "react";

interface SlideProps {
  title: string;
  mainTitle: string;
  description: string;
  buttonText: string;
  image: string;
}

const Slide: React.FC<SlideProps> = ({
  title,
  mainTitle,
  description,
  buttonText,
  image,
}) => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {" "}
      <div className="absolute inset-0 bg-gray-200 z-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center p-4 bg-black bg-opacity-40">
        <h2 className="text-2xl font-bold">{mainTitle}</h2>
        <p className="mt-2">{description}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Slide;
