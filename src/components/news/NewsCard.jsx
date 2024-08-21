import React from "react";
import { FaArrowRight } from "react-icons/fa";

const NewsCard = ({ image, title, description }) => {
  return (
    <>
      <div className="group">
        <div className="relative rounded-t-lg rounded-b-md shadow-lg overflow-hidden">
          <img
            src={image}
            alt=""
            className="mx-auto h-[250px] w-full object-cover transition-transform group-hover:scale-110 duration-200"
          />
          <div className="absolute inset-0 flex flex-col p-4  bg-gradient-to-t from-black/70 to-transparent justify-center pt-24">
            <h1 className="line-clamp-1 text-2xl font-bold mb-2 text-white">
              {title}
            </h1>
            <h1 className="line-clamp-2 text-sm text-white">{description}</h1>
            <div className="flex justify-end pr-4 pt-3 text-gray-500">
              <FaArrowRight className="group-hover:text-white group-hover:translate-x-2 duration-300" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
