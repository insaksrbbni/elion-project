import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CompanyCard = ({ image, title, description }) => {
  return (
    <>
      <div className="group">
        <div className="overflow-hidden">
          <img
            src={image}
            alt=""
            className="mx-auto h-[300px] w-full object-cover group-hover:scale-105 duration-300"
          />
          <div className="space-y-2 p-4 ml-6 bg-[#FFC100]/75 -translate-y-20">
            <h1 className="line-clamp-1 text-2xl font-semibold text-gray-800">
              {title}
            </h1>
            <h1 className="line-clamp-1 text-sm text-gray-500">
              {description}
            </h1>
            <div className="flex justify-end pr-4 text-gray-500">
              <FaArrowRight className="group-hover:text-white group-hover:translate-x-2 duration-300" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyCard;
