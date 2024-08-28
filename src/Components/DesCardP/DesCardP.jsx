import React, { useState } from "react";
import "./DesCardP.css";
import { Link } from "react-router-dom";

const DesCardP = ({ project }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const toggleImage = () => {
    setIsImageOpen(!isImageOpen);
  };

  if (project)
    return (
      <div className="DesCardP">
        <div className="hover-container">
          <img className="imgProject" src={project?.imgProject} alt="" />
          <div className="overlay"></div>
          <div className="hover-buttons">
            <button className="hover-button" onClick={toggleImage}>
              <img src="/protfolioVite/assets/img/Full_alt.png" alt="" />
            </button>
            <button className="hover-button">
              <Link to={project?.demoProject}>
                <img src="/protfolioVite/assets/img/Icon.png" alt="" />
              </Link>
            </button>
          </div>
        </div>

        <div className="bodyDesCardP">
          <div className="gropBtnPS">
            <div className="gropPS">
              <h3>{project?.h3Card}</h3>
              <span>{project?.spanH}</span>
            </div>
            <button>
              <Link to={project?.demoProject}>
                <img src={project.iconDemo} alt="" />
              </Link>
            </button>
          </div>
          <p>{project.Description}</p>
          <div className="InfoProject">
            <p>
              Basic Languages : <span>{project.pCard}</span>
            </p>
            <p>
              Framework : <span>{project.Framework}</span>
            </p>
            <p>
              Libraries : <span>{project.Libraries}</span>
            </p>
          </div>
          <button>Github Repo</button>
        </div>

        {/*  Show img */}
        {isImageOpen && (
          <div className="full-image-modal" onClick={toggleImage}>
            <img
              src={project?.imgProject}
              alt="Full view"
              className="full-image"
            />
          </div>
        )}
      </div>
    );
};

export default DesCardP;
