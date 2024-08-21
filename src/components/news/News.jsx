import React from "react";
import NewsCard from "./NewsCard";
import Manager from "../../assets/img/Manager.png";

const NewsData = [
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
    title: "Ultah",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    id: 5,
    image: Manager,
    title: "Web Development",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
];

const News = () => {
  return (
    <div className="bg-white">
      <div className="w-full px-6 pt-12 pb-8 md:px-20" id="services">
        {/* Header Section */}
        <div className="text-2xl">
          <h1 className="border-l-[6px] px-2 border-[#FFC100]/50 text-black">
            News
          </h1>
        </div>
        {/* Card Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pt-8">
          {NewsData.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
        {/* Button Section */}
        <div className="pt-5 flex items-center justify-center">
          <button className="btn btn-outline btn-warning btn-sm">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
