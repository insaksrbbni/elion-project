import React from "react";
import { FaArrowRight } from "react-icons/fa";

const GalleryCard = ({ image, title, description }) => {
  return (
    <>
      <div className="group relative">
        <div className="rounded-t-lg rounded-b-md overflow-hidden cursor-pointer shadow hover:shadow-black/30 transition-shadow">
          <img
            src={image}
            alt=""
            className=" h-[300px] w-full object-cover group-hover:rotate-3 duration-500 group-hover:scale-125 transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent  via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 justify-center pt-24"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[50%] group-hover:translate-y-0 transition-all">
            <h1 className="line-clamp-2 text-lg md:text-2xl font-bold mb-2 text-white">
              {title}
            </h1>
            <h1 className="line-clamp-4 text-md md:text-lg italic text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {description}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryCard;
