import React from "react";
import Manager from "../assets/img/Manager.png";
import { SlNote } from "react-icons/sl";

const HomePage = () => {
  return (
    <div className="">
      {/* Hero Start */}
      <div
        className="w-full h-screen bg-no-repeat bg-cover bg-opacity-90"
        id="home"
      >
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <h3 className="lg:text-3xl text-2xl text-white">
            Selamat Datang Di Website
          </h3>
          <h1 className="py-2 mx-auto xl:text-6xl text-5xl py-auto primary-color flex items-center justify-center text-center">
            ELION HANAYA ABYUDAYA
          </h1>
          <div className="pt-7">
            <button className="btn btn-outline btn-warning">Explore Now</button>
          </div>
        </div>
      </div>
      {/* Hero end */}

      {/* ABout start */}
      <section className="w-full px-6 py-20 md:px-20" id="about">
        <div className="bg-white ">
          <div className="text-2xl">
            <h1 className="border-l-[6px] px-2 border-[#FFC100]/50 text-black">
              Profile
            </h1>
          </div>
          <div className="grid pt-8 md:grid-cols-2">
            <div>
              <img
                src={Manager}
                alt=""
                className="border-l-8 border-[#FFC100]"
              />
            </div>
            <div className="flex flex-col justify-center mx-10">
              <h1 className="py-3 text-3xl text-black">
                Elion Hanaya Abyudaya
              </h1>
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </p>
              <div className="pt-3">
                <button className="btn btn-outline btn-warning btn-sm">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About End */}

      {/* Services start */}
      <section id="services">
        <div className="bg-gray-100 ">
          <div className="w-full px-6 py-14 md:px-20" id="services">
            {/* Header Section */}
            <div className="text-2xl">
              <h1 className="border-l-[6px] px-2 border-[#FFC100]/50 text-black">
                Our Services
              </h1>
            </div>
            {/* Card section */}
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 pt-8 gap-5">
              <div>
                <div className="shadow-lg flex flex-col px-7 py-7 bg-slate-50 rounded items-center justify-center text-center">
                  <SlNote className="text-2xl text-[#FFC100]" />
                  <h1 className="text-gray-700 text-2xl pt-5">
                    Arcitecture Design
                  </h1>
                  <p className="pt-2 ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <div className="shadow-lg flex flex-col px-7 py-7 bg-slate-50 rounded items-center justify-center text-center">
                  <SlNote className="text-2xl text-[#FFC100]" />
                  <h1 className="text-gray-700 text-2xl pt-5">
                    Arcitecture Design
                  </h1>
                  <p className="pt-2 ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <div className="shadow-lg flex flex-col px-7 py-7 bg-slate-50 rounded items-center justify-center text-center">
                  <SlNote className="text-2xl text-[#FFC100]" />
                  <h1 className="text-gray-700 text-2xl pt-5">
                    Arcitecture Design
                  </h1>
                  <p className="pt-2 ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <div className="shadow-lg flex flex-col px-7 py-7 bg-slate-50 rounded items-center justify-center text-center">
                  <SlNote className="text-2xl text-[#FFC100]" />
                  <h1 className="text-gray-700 text-2xl pt-5">
                    Arcitecture Design
                  </h1>
                  <p className="pt-2 ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* services end */}
    </div>
  );
};

export default HomePage;
