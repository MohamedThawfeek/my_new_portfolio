import React, { useEffect, useState } from "react";
import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import js from "../../../assets/js.png";
import tailwind from "../../../assets/tailwindcss.png";
import bootstrap from "../../../assets/bootstrap.png";
import material from "../../../assets/mui.png";
import nodejs from "../../../assets/nodejs.png";
import reactjs from "../../../assets/react.png";
import redux from "../../../assets/redux.png";
import mongodb from "../../../assets/mongoose.png";
import firebase from "../../../assets/firebase.png";
import aws from "../../../assets/aws.png";
import github from "../../../assets/github.png";

const skillsData = [
  { title: "HTML", percent: 95, image: html },
  { title: "CSS", percent: 80, image: css },
  { title: "AWS", percent: 75, image: aws },
  { title: "Redux", percent: 85, image: redux },
  { title: "Node JS", percent: 90, image: nodejs },
  { title: "React JS", percent: 90, image: reactjs },
  { title: "Github", percent: 85, image: github },
  { title: "Mongo DB", percent: 90, image: mongodb },
  { title: "Firebase", percent: 75, image: firebase },
  { title: "JavaScript", percent: 85, image: js },
  { title: "Boot Strap", percent: 70, image: bootstrap },
  { title: "Material UI", percent: 65, image: material },
  { title: "Tailwind CSS", percent: 90, image: tailwind },
  { title: "React Native", percent: 75, image: reactjs },
];

const Progressbar = () => {
  const [currentSkill, setCurrentSkill] = useState(skillsData[0]);
  const circumference = 2 * Math.PI * 120;
  const radius = 120;

  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setOffset(circumference - (currentSkill.percent / 100) * circumference);
    }, 300);

    return () => clearTimeout(animationTimeout);
  }, [circumference, currentSkill.percent]);

  return (
    <div className="flex p-4 items-center justify-center h-full 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col mobile:flex-col xss:flex-col gap-7">
      <div className=" flex items-center justify-start gap-4 px-10 flex-wrap">
        {skillsData.map((skill, index) => (
          <button
            key={index}
            onClick={() => setCurrentSkill(skill)}
            className={`px-4 py-2 text-xl text-gray-100 transition bg-primary_color rounded-md ${
              currentSkill.title === skill.title &&
              "font-bold ring-2 ring-gray-100"
            }`}
          >
            {skill.title}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center w-[100%]">
        <svg className="transform -rotate-90 w-72 h-72">
          <circle
            cx="145"
            cy="145"
            r={radius}
            stroke="currentColor"
            strokeWidth="10"
            fill="transparent"
            className="text-gray-300"
          />

          <circle
            cx="145"
            cy="145"
            r={radius}
            strokeWidth="20"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-stroke duration-1000 ease-in-out"
            style={{
              stroke: "url(#gradient)",
              strokeLinecap: "round",
            }}
          />

          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f89a0d" />
              <stop offset="100%" stopColor="#dd0796c2" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute">
          <img
            src={currentSkill.image}
            alt=""
            className="w-[100px] h-[100px]"
          />
        </span>
      </div>
    </div>
  );
};

export default Progressbar;
