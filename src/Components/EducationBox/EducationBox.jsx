import React from "react";
import "./EducationBox.css";

const EducationBox = ({ H31Title, des1Body, h32Title, des2Body }) => {
  return (
    <div className="ContainerE">
      <div className="Item">
        <div className="Dot"> </div>
        <div className="Content">
          <h3>{H31Title}</h3>
          <p>{des1Body}</p>
        </div>
      </div>
      <div className="Item">
        <div className="Dot"> </div>
        <div className="Content">
          <h3>{h32Title}</h3>
          <p>{des2Body}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationBox;
