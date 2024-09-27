import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import emailjs from "emailjs-com";

import Aos from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";

const Contactus = () => {
  useEffect(() => {
    Aos.init({
      offset: 300,
      duration: 1000,
      easing: "linear",
      delay: 200,
    });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMail = (e) => {
    e.preventDefault();
    try {
      emailjs.sendForm(
        "service_1j9iaal",
        "template_qiv7ghi",
        e.target,
        "GS40acueC5ka8QHZp"
      );
      toast.success("Your Message Has Send Successfully");
      setName("");
      setMessage("");
      setEmail("");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div id="book a call" className="contactus-container">
      <div className="box-content ">
        <h1 className="title-text">Contact Me</h1>
        <div className="contact-content-box">
          <div data-aos="fade-right" className="contact-left">
            <div className="contact-content">
              <div className="contact-icon">
                <FaLocationDot />
              </div>
              <div className="contact-text">
                <h1 className="contact-head">Address</h1>
                <h1 className="contact-sub-head">Somewhere in world</h1>
              </div>
            </div>

            <div className="contact-content">
              <div className="contact-icon">
                <MdOutlineMail />
              </div>
              <div className="contact-text">
                <h1 className="contact-head">Email</h1>
                <h1 className="contact-sub-head">thawfeek96@gmail.com</h1>
              </div>
            </div>

            <div className="contact-content">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div className="contact-text">
                <h1 className="contact-head">Phone</h1>
                <h1 className="contact-sub-head">+91 8248383211</h1>
              </div>
            </div>
          </div>
          <form
            onSubmit={sendMail}
            data-aos="fade-left"
            className="contact-right"
          >
            <div className="contact-content-right">
              <label className="input-label">Name</label>
              <input
                name="name"
                type="text"
                className="input-field"
                placeholder="Enter your Name"
                required={true}
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="contact-content-right">
              <label className="input-label">Email</label>
              <input
                name="user_email"
                type="email"
                className="input-field"
                placeholder="Enter your Email"
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="contact-content-right">
              <label className="input-label">Description</label>
              <textarea
                name="message"
                type="text"
                className="input-textarea"
                placeholder="Enter description"
                required={true}
                rows={5}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>

            <div className="2xl:w-[50%]  xl:w-[50%]  lg:w-[100%]  md:w-[100%]  sm:w-[100%]  xs:w-[100%]  mobile:w-[100%]  xss:w-[100%]  flex items-center justify-end">
              <button className="button">Send</button>
            </div>
          </form>
        </div>
      </div>

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Contactus;
