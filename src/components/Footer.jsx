import React from "react";
import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

const Footer = () => {
  return (
    <div className="text-white bg-gray-900">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1 className="mb-6 text-2xl font-semibold lg:text-3xl md:mb-0 lg:leading-normal md:w-2/5">
          <span className="text-teal-400">Gratis</span> silahkan hubungi kami
          jika ada yang di tanyakan
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter Your ph.no"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            Request Code
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 py-16 px-7 sm:grid-cols-3 lg:grid-cols-4 sm:px-8">
        <Item Links={PRODUCTS} title="PRODUCTS" />
        <Item Links={COMPANY} title="COMPANY" />
      </div>
      <div className="grid grid-cols-1 gap-10 pt-2 pb-8 text-sm text-center text-gray-400 sm:grid-cols-2 lg:grid-cols-3">
        <span>© 2024 Elion Informatika.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </div>
  );
};

export default Footer;
