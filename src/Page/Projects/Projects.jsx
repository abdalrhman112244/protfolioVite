import React, { useEffect, useState } from "react";
import SliderProject from "../../Components/SliderProject/SliderProject";
import "./Projects.css";
import DesCardP from "./../../Components/DesCardP/DesCardP";
import { useParams } from "react-router-dom";
import { myProjectsData } from "../../Components/MyProjects/MyProjects";

const Projects = () => {
  const params = useParams();
  const [project, setProject] = useState();

  useEffect(() => {
    const existProject = myProjectsData.find((p) => p.id === +params?.id);
    setProject(existProject);
  }, [params]);

  return (
    <div className="Projects">
      <DesCardP project={project} />
      <SliderProject />
    </div>
  );
};

export default Projects;
