import React from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  return (
    <>
      <div className="skill-box">
        <span className="title">HTML</span>
        <div className="skill-bar">
          <span className="skill-per html">
            <span className="circle"></span>
            <span className="tooltip">95%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">CSS</span>
        <div className="skill-bar">
          <span className="skill-per css">
            <span className="circle"></span>
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">JavaScript</span>
        <div className="skill-bar">
          <span className="skill-per javascript">
            <span className="circle"></span>
            <span className="tooltip">70%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">ReactJS</span>
        <div className="skill-bar">
          <span className="skill-per reactjs">
            <div className="circle"></div>
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">Bootstrap</span>
        <div className="skill-bar">
          <span className="skill-per Bootstrap">
            <div className="circle"></div>
            <span className="tooltip">90%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">Tailwind Css</span>
        <div className="skill-bar">
          <span className="skill-per Tailwind">
            <div className="circle"></div>
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
