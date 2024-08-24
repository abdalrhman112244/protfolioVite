import AboutMe from "../../Components/AboutMe/AboutMe";
import Contact from "../../Components/Contact/Contact";
import EducationAndExperience from "../../Components/EducationAndExperience/EducationAndExperience";
import Hero from "../../Components/Hero/Hero";
import MyProjects from "../../Components/MyProjects/MyProjects";
import TryMe from "../../Components/TryMe/TryMe";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Hero
        name="I’m AbdAlRhman, Frontend Developer and UI UX Designer"
        des="I am an expert in design and have designed more than one project and I have one year of experience"
      />
      <AboutMe />
      <EducationAndExperience />
      <TryMe />
      <MyProjects />
      <Contact />
    </div>
  );
};

export default Home;
