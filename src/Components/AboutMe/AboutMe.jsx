import ProgressBar from "../ProgressBar/ProgressBar";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div id="AboutMe" className="AboutMe">
      <div className="AboutMePart1">
        <img src="/assets/img/Group 1000001803.png" alt="" />
      </div>
      <div className="AboutMePart2">
        <div className="titleAbout">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            doloremque magnam fuga pariatur quos. Recusandae asperiores
            consequuntur quae quisquam quas
          </p>
        </div>
        <ProgressBar />
      </div>
    </div>
  );
};

export default AboutMe;
