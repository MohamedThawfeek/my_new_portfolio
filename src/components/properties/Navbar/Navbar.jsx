import React, { useState } from "react";

//assest
import resume from "../../../assets/Mohamed's Resume.pdf";

//third party libraries
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { IoArrowForward } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

//Component
import Button from "../button/button";

//Hooks
import { setActive } from "../../../redux/slice/navbar";

const Navbar = () => {
  const dispatch = useDispatch();
  const { menu, navbar_title, nav_active } = useSelector(
    (state) => state.navbar
  );

  const [navbar, setNavbar] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const navBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", navBackground);

  return (
    <div className="navbar-container">
      <nav
        className={`${
          navbar ? "navbar-active" : "navbar-inactive "
        } navbar-content relative`}
      >
        <h1 className="navbar-title" >
          <Link to="home" smooth={true} duration={200} onClick={() => dispatch(setActive(""))}>
            {navbar_title}
          </Link>
        </h1>
        <div className="2xl:flex xl:flex lg:flex navbar-left-side md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
          {menu.map((item, index) => {
            return (
              <Link
                to={item}
                smooth={true}
                duration={2000}
                className={`${
                  nav_active === item && "nav-active "
                } menu-options hover:text-primary_color`}
                key={index}
                onClick={() => dispatch(setActive(item))}
              >
                {item}{" "}
                {index === menu.length - 1 && (
                  <IoArrowForward size={20} className="animate-slide" />
                )}
              </Link>
            );
          })}

          <Button width="145px" height="45px">
            <a href={resume} download="my_resume" className="z-10">
              Download CV
            </a>
          </Button>
        </div>
        <div className="2xl:hidden xl:hidden lg:hidden navbar-left-side1 md:flex-1 sm:flex-1 xs:flex-1 mobile:flex-1 xss:flex-1 px-5">
          {openMenu ? (
            <IoMdClose size={30} onClick={() => setOpenMenu(!openMenu)} />
          ) : (
            <IoMdMenu size={30} onClick={() => setOpenMenu(!openMenu)} />
          )}
        </div>
        <div
          className={`2xl:hidden xl:hidden lg:hidden md:flex sm:flex xs:flex mobile:flex xss:flex absolute w-full min-h-[300px] bg-white top-[100%] transition-transform duration-500 ease-in-out flex-col items-start justify-around px-10 ${
            openMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {menu.map((item, index) => {
            return (
              <Link
                to={item}
                smooth={true}
                duration={2000}
                className={`${
                  nav_active === item && "nav-active "
                } menu-options hover:text-primary_color`}
                key={index}
                onClick={() => dispatch(setActive(item))}
              >
                {item}{" "}
                {index === menu.length - 1 && (
                  <IoArrowForward size={20} className="animate-slide" />
                )}
              </Link>
            );
          })}

          <Button width="145px" height="35px">
            <a href={resume} download="my_resume" className="z-10">
              Download CV
            </a>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
