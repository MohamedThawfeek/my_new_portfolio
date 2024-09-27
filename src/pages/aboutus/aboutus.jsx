import React, { useEffect } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

import Aos from "aos";
import "aos/dist/aos.css";
const Aboutus = () => {

  useEffect(() => {
    Aos.init({
      offset: 300,
      duration: 1000,
      easing: "linear",
      delay: 200,
    });
  }, []);


  return (
    <div id="about" className="aboutus-container">
      <div className="box-content ">
        <h1 className="title-text">About</h1>
        <div className="about-content-box">
          <div className="content-box" data-aos="fade-right">
            <div className="content-heading">
              <FaUserGraduate />
              <h1>Education</h1>
            </div>
            <div className="education-content">
              <div className="flex flex-col">
                <h1 className="education-title">
                  Periyar centenary polytechnic college
                </h1>
                <p className="education-sub-title">
                  Diploma in computer technology
                </p>
                <p className="education-year">2014-2018</p>
              </div>
              <div>
                <h1 className="education-title">
                  kamala subramaniam hr.sec.school
                </h1>
                <p className="education-sub-title">SSLC</p>
                <p className="education-year">2012-2013</p>
              </div>
            </div>
          </div>

          <div className="content-box" data-aos="fade-left">
            <div className="content-heading">
            <RiComputerLine />
            <h1>Tech, Courses</h1>
            </div>
            <div className="education-content">
              <div>
                <h1  className="education-title">full stack web development</h1>
                <p className="education-sub-title">full stack web development</p>
                <p className="education-year">august2021 - january2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
