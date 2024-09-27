import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";

const Service = () => {
  useEffect(() => {
    Aos.init({
      offset: 300,
      duration: 1000,
      easing: "linear",
      delay: 200,
    });
  }, []);

  const { service_box, service_box2, service_box3 } = useSelector(
    (state) => state.services
  );

  return (
    <div id="service" className="service-container ">
      <div className="box-content">
        <h1 className="title-text">Services</h1>
        <h2 className="sub-title-text">
          Develope that solve problems, one product at a time
        </h2>

        <div className="service-content-box">
          <div className="service-box" data-aos="fade-right">
            <h1 className="service-box-title">what i can do for you</h1>
            <h1 className="service-box-sub-title">
              faster better products that your user love here's all the services
              provide
            </h1>
            <div className="service-list">
              {service_box.map((service, index) => (
                <ul key={index} className="service-item">
                  <li className="service-item list-disc">{service}</li>
                </ul>
              ))}
            </div>
          </div>
          <div className="service-box" data-aos="zoom-in">
            <h1 className="service-box-title">language i'm fluent in</h1>

            <h1 className="service-box-sub-title">
              every developer needs the right tools to do the perfect job
            </h1>

            <div  className="service-list items-center">
              {service_box2.map((service, index) => (
                <ul key={index} className="service-item w-[100px]">
                  <li className="service-item list-disc">{service}</li>
                </ul>
              ))}
            </div>
          </div>

          <div className="service-box" data-aos="fade-left">
            <h1 className="service-box-title">what you can expert</h1>
            <h1 className="service-box-sub-title">
              i design product that are more than pretty i make the shippable
              and useable
            </h1>

            <div className="service-list">
              {service_box3.map((service, index) => (
                <ul key={index} className="service-item">
                  <li className="list-disc">{service}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
