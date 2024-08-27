import React from "react";
import "./EducationAndExperience.css";
import SectionTitle from "./../SectionTitle/SectionTitle";
import EducationBox from "../EducationBox/EducationBox";
import { FaArrowUp } from "react-icons/fa";

const EducationAndExperience = () => {

  return (
    <div id="Education" className="EducationAndExperience">
      <SectionTitle
        Des="Education and Experience"
        Title="Education & Experience"
        Pos="center"
      />
      <div className="AllEducationBox">
        <EducationBox />
        <EducationBox />
      </div>
      <button className="BEducationAndExperience" onClick={() => window.scrollTo(0, 0)}>
        <FaArrowUp />
      </button>
    </div>
  );
};

export default EducationAndExperience;