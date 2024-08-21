import React from "react";
import { SlNote } from "react-icons/sl";
import LoremIpsum from "react-lorem-ipsum";

const SkillData = [
  {
    name: "App Development",
    icon: <SlNote className="" />,
    link: "#",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    aosDelay: 0,
  },
  {
    name: "Arcitecture Desgin",
    icon: <SlNote className="" />,
    link: "#",
    description: "Vivamus lacinia odio vitae vestibulum vestibulum. ",
    aosDelay: 300,
  },
  {
    name: "Web Design",
    icon: <SlNote className="" />,
    link: "#",
    description: "Cras venenatis euismod malesuada. Etiam eget lacus nec. ",
    aosDelay: 0,
  },
  {
    name: "Game House",
    icon: <SlNote className="" />,
    link: "#",
    description: "Mauris euismod, nisi eget condimentum fringilla, enim est. ",
    aosDelay: 0,
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="w-full px-6 py-12 md:px-20" id="services">
        {/* Header Section */}
        <div className="text-2xl">
          <h1 className="border-l-[6px] px-2 border-[#FFC100] text-black">
            Our Services
          </h1>
        </div>
        {/* Card Section */}
        <div className="grid grid-cols-1 gap-4 pt-8 md:grid-cols-2 xl:grid-cols-4">
          {SkillData.map((skill) => (
            <div key={skill.name} className="py-4 space-y-3 card sm:space-y-4">
              <div className="text-2xl text-primary">{skill.icon}</div>
              <h1 className="text-lg font-semibold text-gray-800">
                {skill.name}
              </h1>
              <p className="text-gray-500">{skill.description}</p>
            </div>
          ))}
        </div>
        {/* Button Section */}
        <div className="pt-4 text-center">
          <button className="btn btn-outline btn-warning btn-sm">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
