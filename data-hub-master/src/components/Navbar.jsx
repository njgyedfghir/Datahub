import React, { useState } from "react";
import {
  AiFillMail,
  AiFillPhone,
  AiOutlineClose,
  AiOutlineMenu,
  AiFillCaretDown
} from "react-icons/ai";
import "../styles/nav.css";
import Header from "./Header";
import ace_logo from "../images/ADHF.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const handleLinkClick = (event) => {
    const clickedLink = event.currentTarget;
    const clickedItem = clickedLink.parentNode;
    const dropdownMenu = clickedItem.querySelector('ul');

    // Toggle active class on clicked item
    clickedItem.classList.toggle('active');

    // Toggle active class on dropdown menu
    if (dropdownMenu) {
      dropdownMenu.classList.toggle('active');
    }
  };

  return (
    <div className=" bg-[#173e26] sticky top-0 z-50">
      <Header />
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <h1 className=" text-2xl font-semibold flex align-middle">
          <Link to ="/"><img src={ace_logo} className=" w-20" alt="" /></Link>
          <span className="AIDH">
            <span className="text-[45px]"> | </span>ACE Data Hub
          </span>
          <span className="IDH hidden">
            <span className="text-[45px]"> | </span>ADH
          </span>
        </h1>
        <ul className="hidden  md:flex">
          <li className="p-4 list">
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
          </li>

          <li className="p-4 list">
            {/* <a href="../pages/explore.jsx">Explore</a> */}
            <Link to="/explore">Explore</Link>
          </li>
          <li className="p-4 list">
            {/* <a href="/">About us</a> */}
            <Link to="https://aceadvisors.org/about-us/">About us</Link>
          </li>
          <li className="p-4 list">
            <a href="mailto:contact.aceadvisors.org">
              <AiFillMail size={25} />
            </a>

          </li>
          <li className="p-4 list">
            <a href="tel:+251962001111">
              <AiFillPhone size={25} />
            </a>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </div>
        <div
          className={
            !nav
              ? "fixed top-[-100%]"
              : "fixed left-0 top-28 w-[100%] bg-gradient-to-b from-[#173e26] to-[rgba(23,62,38,0.5)] max-h-[78vh] overflow-y-auto ease-in-out duration-500 nav md:hidden flex"
          }
        >
          {/* <h1 className='w-[30%] text-3xl font-bold m-4'>ACE IDH</h1> */}
          <ul className={!nav ? "hidden md:flex" : "p-4 text-lg"} 
              onClick={(event) => {
              const clickedElement = event.target;
              const textContent = clickedElement.textContent.trim();
              if (textContent !== "Regulatory & Strategy" && textContent !== "Data Repository") {
                closeNav();
              }
            }}>
            <li className="p-4 border-b border-white">
              {/* <a href="/">Home</a> */}
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 border-b border-white">
              {/* <a href="/">Explore</a> */}
              <Link to="/explore">Explore</Link>
            </li>
            <li className="p-4 border-b border-white">
              {/* <a href="/">Explore</a> */}
              <Link onClick={handleLinkClick} >Regulatory & Strategy <AiFillCaretDown className="inline caret" /></Link>
              <ul>
                <li>
                  <Link to="/explore/National-strategies-and-policies">National Strategies & Policies</Link>
                </li>
                <li>
                  <Link to="/explore/Buisness-and-regulatory-framework">Business Regulatory Framework</Link>
                </li>
                <li>
                  <Link to="/explore/Other-studies">Other Studies</Link>
                </li>
                <li>
                  <Link to="/explore/Important-links">Important Links</Link>
                </li>
              </ul>
            </li>
            <li className="p-4 border-b border-white">
              {/* <a href="/">Explore</a> */}
              <Link onClick={handleLinkClick}>Data Repository<AiFillCaretDown className="inline caret" /></Link>
              <ul>
                <li>
                  <Link to="/explore/data-repository/Doing-Business">Doing Business</Link>
                </li>
                <li>
                  <Link to="/explore/data-repository/Economy">Economy</Link>
                </li>
                <li>
                  <Link to="/explore/data-repository/Infrastructure">Infrastructure</Link>
                </li>
                <li>
                  <Link to="/explore/data-repository/Investment">Investment</Link>
                </li>
                <li>
                  <Link to="/explore/data-repository/Social">Social</Link>
                </li>
                <li>
                  <Link to="/explore/data-repository/Trade">Trade</Link>
                </li>
              </ul>
            </li>
            <li className="p-4 border-b border-white">
              {/* <a href="/">About us</a> */}
              <Link to="https://aceadvisors.org/about-us/">About us</Link>
            </li>
            <li className="p-4 border-b border-white flex">
              <a href="mailto:ananisamuelhope@gmail.com" className="flex">
                <AiFillMail size={25} className=" mr-4"/>
                 Email
              </a>
            </li>
            <li className="p-4">
              <a href="tel:+251962001111" className="flex">
                <AiFillPhone size={25} className=" mr-4" />
                 Phone
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
