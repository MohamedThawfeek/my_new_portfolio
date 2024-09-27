import React from "react";
import { useSelector } from "react-redux";

const Blogs = () => {
  const { blogs } = useSelector((state) => state.blogs);
  return (
    <div id="blog" className="blogs-container">
      <div className="box-content ">
        <h1 className="title-text">Blogs</h1>
        <div className="blogs-content-box">
          {blogs.map((item, index) => (
            <div className="content-box" key={index}>
              <img src={item.image} className="blog-picture" alt="" />
              <h1 className="blog-title">{item.title}</h1>
              <p className="blog-sub-text">{item.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
