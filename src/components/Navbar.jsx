import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/img/Logo.png";

const links = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "Services", href: "#services" },
  { text: "Company", href: "#company" },
  { text: "News", href: "#news" },
  { text: "Gallery", href: "#gallery" },
  { text: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
    <div
      className={
        header
          ? "z-50 bg-[#FFC100] fixed w-full text-black"
          : "z-50 fixed w-full backdrop-blur-md text-white"
      }
    >
      <div className="z-50 flex items-center justify-between h-20 px-6 py-2 md:px-20">
        <div className="flex items-center justify-center">
          <img src={logo} alt="" className="size-14" />
          <h1 className="ml-2 text-2xl">EHA</h1>
        </div>
        <div className="Nav">
          <div className="hidden md:flex">
            {links.map((link, index) => (
              <a key={index} href={link.href} className="ml-5">
                {link.text}
              </a>
            ))}
          </div>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>

          <div
            className={
              nav
                ? "text-gray-300 fixed h-full left-0 top-0 w-[50%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500"
                : "fixed left-[-100%]"
            }
          >
            <h1 className="pt-4 m-4 text-2xl font-semibold primary-color">
              MENU
            </h1>
            <div className="px-8 text-2xla">
              {links.map((link, index) => (
                <a key={index} href={link.href} className="flex flex-col ml-5">
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
