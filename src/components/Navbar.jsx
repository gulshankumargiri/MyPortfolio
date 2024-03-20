import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { GiSplitCross } from "react-icons/gi";

import pic from "../images/pic.png";


const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <div>
      <nav className="flex items-center justify-around h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="flex items-center gap-4">
            <img className="w-12 h-11 rounded-full" src={pic} alt="" />
            <div className="font-medium dark:text-white">
              <div className="">
                <span className="text-yellow-500">GUL</span>SHAN
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 ">
                web-developer
              </div>
            </div>
          </div>
        </NavLink>

        <NavLink to="/about">
          <div className="font-medium text-slate-100 flex justify-center items-center">
            <button>
             About me
            </button>
          </div>
        </NavLink>

        <div className="   font-medium text-slate-100 ">
          <div>
            {!isMenuOpen ? (
              <HiMenu onClick={toggleMenu} className="cursor-pointer " />
            ) : (
              <div>
                <GiSplitCross
                  onClick={toggleMenu}
                  className={`cursor-pointer rotate-90  `}
                />
                <div className="flex absolute items-center border-none shadow-xl bg-slate-500 rounded-b-lg  right-2 p-2 top-20 space-y-3">
                  <br />

                  <div className="navbarbottom-container lg:m-5  ">
                    <NavLink to="/education">
                      <p className="h">Education</p>
                    </NavLink>
                    <NavLink to="/skills">
                      <p className="h">Skill</p>
                    </NavLink>
                    <NavLink to="/project">
                      <p className="h">Projects</p>
                    </NavLink>
                    <NavLink to="/contact">
                      <p className="h">Contact Me</p>
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div></div>
      </nav>
    </div>
  );
};

export default Navbar;
