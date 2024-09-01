import ProgressBar from "../ProgressBar/ProgressBar";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div id="AboutMe" className="AboutMe">
      <div className="AboutMePart1">
        <img src="/protfolioVite/assets/img/Group 1000001803.png" alt="" />
      </div>
      <div className="AboutMePart2">
        <div className="titleAbout">
          <h2>About Me</h2>
          <p>
            My name is AbdAlRhman Berkdar from Syria, living in Latakia. I am
            21 years old and I have some hobbies, including football and others.
            I entered the field of website development out of love and a desire
            to learn and develop myself.
          </p>
        </div>
        <ProgressBar />
      </div>
    </div>
  );
};

export default AboutMe;
