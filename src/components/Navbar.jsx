import React from "react";
// import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-3 mb-4">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} /> */}
        <h1 className="mx-2 text-2xl">SS</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/s-saravanan-5964ba258/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
        <a href="https://github.com/SaravananS22" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://x.com/?lang=en" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </nav>
  );
};

export default Navbar;
