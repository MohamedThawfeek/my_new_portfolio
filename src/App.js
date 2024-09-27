import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import { Link } from "react-scroll";
import load from "./assets/loading.gif";

import Navbar from "./components/properties/Navbar/Navbar";
import Service from "./pages/service/service";
import Aboutus from "./pages/aboutus/aboutus";
import Blogs from "./pages/blogs/blogs";
import Projects from "./pages/projects/projects";
import Skills from "./pages/skills/skills";
import Contact from "./pages/contactus/contactus";
import Footer from "./pages/footer/footer";

import { IoMdArrowUp } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setActive } from "./redux/slice/navbar";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="w-full h-full   overflow-hidden">
      {loading ? (
        <div className={`loader`}>
          <img src={load} alt="" />
        </div>
      ) : (
        <div className="w-full h-full relative">
          <Navbar />
          <Home />
          <Service />
          <Skills />
          <Projects />
          <Blogs />
          <Aboutus />
          <Contact />
          <Footer />
          <button className="fixed right-6 bottom-[5%] w-[40px] h-[40px] bg-gray-300 rounded-full flex items-center justify-center z-50 text-white hover:text-primary_color transition-all duration-500 ease-in-out">
            <Link
              to="home"
              smooth={true}
              duration={200}
              onClick={() => dispatch(setActive(""))}
            >
              <IoMdArrowUp size={25} />
            </Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
