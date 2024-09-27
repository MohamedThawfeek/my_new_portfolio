import React from "react";
import Picture from "../../assets/my_pic.png";
import Button from "../../components/properties/button/button";

import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="home" className="w-full h-[100vh] bg-section1">
      <div className="home-container">
        <div className="flex-1 flex items-start justify-evenly pt-[100px] px-11 flex-col">
          <div className="flex items-start justify-stretch flex-col w-full">
            <h1 className=" text-[20px] text-orange_color font-bold text-shadow pt-16">
              Hello, I'm
            </h1>
            <h1 className="name-container">Mohamed Thawfeek</h1>
            <h1 className="position-container pt-3">Full Stack Developer</h1>
            <p className="description-container">
              i'm web developer based in india, and i'm very passionate and
              dedicated to my work
            </p>
          </div>

          <div className="pb-10 flex items-center gap-8 flex-col">
            <div className=" w-[150px] flex items-center justify-center  h-[40px]">
              <Button width="160px" height="40px">
                <Link
                  to="about"
                  smooth={true}
                  duration={2000}
                  className={`z-10`}
                >
                  About
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-12">
              <a
                href="https://www.facebook.com/thawfeek.thaw"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF size={30} className="hover:text-primary_color" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-thawfeek-346a23220"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={30} className="hover:text-primary_color" />
              </a>
              <a
                href="https://www.instagram.com/smart_thawfeek_"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoInstagram
                  size={30}
                  className="hover:text-primary_color"
                />
              </a>

              <a
                href="https://github.com/MohamedThawfeek?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={30} className="hover:text-primary_color" />
              </a>
            </div>
          </div>
        </div>
        <div className=" 2xl:w-[40%] xl:w-[40%] lg:w-[40%] md:w-[100%] sm:w-[100%] xs:w-[100%] mobile:w-[100%] xss:w-[100%] h-full flex items-center  2xl:justify-end xl:justify-end lg:justify-center md:justify-center sm:justify-center xs:justify-center mobile:justify-center xss:justify-center m-auto">
          <img
            src={Picture}
            className="2xl:h-[80%] xl:h-[80%] lg:h-[85%] md:h-[80%] sm:h-[80%] xs:h-[80%] mobile:h-[80%] xss:h-[80%] mt-[16%] 2xl:w-[60%] xl:w-[60%] lg:w-[90%] md:w-[45%] sm:w-[45%] xs:w-[70%] mobile:w-[70%] xss:w-[70%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
