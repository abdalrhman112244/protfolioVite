import React from "react";
import SliderProject from "../../Components/SliderProject/SliderProject";
import "./Projects.css";
import DesCardP from "./../../Components/DesCardP/DesCardP"

const Projects = () => {
  return (
    <div className="Projects">
      <DesCardP />
      <SliderProject />
    </div>
  );
};

export default Projects;
