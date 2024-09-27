import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, A11y } from "swiper";
import { IoArrowForward } from "react-icons/io5";
import { useSelector } from "react-redux";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Initialize Swiper modules
SwiperCore.use([Navigation, A11y]);

const Projects = () => {
  const { projects } = useSelector((state) => state.projects);

  return (
    <div id="project" className="projects-container">
      <div className="box-content">
        <h1 className="title-text">Projects</h1>
        <div className="projects-content-box 2xl:block xl:block lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
          <Swiper
            spaceBetween={150}
            slidesPerView={3}
            navigation
            className="card-slide"
          >
            {projects.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card">
                  <img
                    className="card-img"
                    src={item.image}
                    alt={item.project_name}
                  />
                  <h4 className="card-project">{item.project_content}</h4>
                  <p className="card-project-name">{item.project_name}</p>
                  <a
                    href={item.projects_url}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Project
                    <IoArrowForward size={20} className="animate-slide" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="projects-content-box 2xl:hidden xl:hidden lg:block md:block sm:block xs:hidden mobile:hidden xss:hidden">
          <Swiper
            spaceBetween={150}
            slidesPerView={2}
            navigation
            className="card-slide"
          >
            {projects.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card">
                  <img
                    className="card-img"
                    src={item.image}
                    alt={item.project_name}
                  />
                 <h4 className="card-project">{item.project_content}</h4>
                 <p className="card-project-name">{item.project_name}</p>
                  <a
                    href={item.projects_url}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Project
                    <IoArrowForward size={20} className="animate-slide" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="projects-content-box 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block mobile:block xss:block">
          <Swiper
            spaceBetween={150}
            slidesPerView={1}
            navigation
            className="card-slide"
          >
            {projects.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card">
                  <img
                    className="card-img"
                    src={item.image}
                    alt={item.project_name}
                  />
                <h4 className="card-project">{item.project_content}</h4>
                <p className="card-project-name">{item.project_name}</p>
                  <a
                    href={item.projects_url}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Project
                    <IoArrowForward size={20} className="animate-slide" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Projects;
