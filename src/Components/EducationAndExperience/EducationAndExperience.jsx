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
        <EducationBox
          H31Title="Certificates obtained"
          des1Body="General Secondary School Certificate, Science Section, Grade 95%
                    Front End Certificate within Vocal X Company, Grade 85%
                    Training Certificate for Qualification within the Labor Market with Real Projects, Grade 95%
                    UI UX Certificate with Grade 90%"
          h32Title="University study"
          des2Body="I study computer engineering and automatic control at Tishreen University, fourth year"
        />
        <EducationBox
          H31Title="Front End Projects"
          des1Body="I have created many projects, and the most important of these projects was a project for trading digital currencies within the working month and a special website for the company."
          h32Title="UI UX Projects"
          des2Body="I have created many projects including restaurant projects, online stores, and others."
        />
      </div>
      <button
        className="BEducationAndExperience"
        onClick={() => window.scrollTo(0, 0)}
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default EducationAndExperience;
