import React from "react";
import Manager from "../../assets/img/Manager.png";
import CompanyCard from "./CompanyCard";

const CompanyData = [
  {
    id: 1,
    image: Manager,
    title: "Architecture",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 2,
    image: Manager,
    title: "Game House",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 3,
    image: Manager,
    title: "Architecture",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 4,
    image: Manager,
    title: "Web Development",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
];

const Company = () => {
  return (
    <div className="bg-white">
      <div className="w-full px-6 pt-12 md:px-20" id="services">
        {/* Header Section */}
        <div className="text-2xl">
          <h1 className="border-l-[6px] px-2 border-[#FFC100]/50 text-black">
            Company
          </h1>
        </div>
        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
          {CompanyData.map((company) => (
            <CompanyCard key={company.id} {...company} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company;
