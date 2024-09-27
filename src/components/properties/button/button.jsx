import React from "react";

const button = ({ children, width = "145px", height = "45px" }) => {
  return (
    <>
      <div style={{ width: width, height: height }} className="download-button">
        {children}
        <span className="absolute inset-0 bg-orange-500 top-[50px] transition-all duration-500 ease-in-out"></span>
      </div>
    </>
  );
};

export default button;
