import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { MdArrowOutward } from "react-icons/md";
import "./MyProjects.css";
import MyProjectsCard from "../MyProjectsCard/MyProjectsCard";

const MyProjects = () => {
  return (
    <div className="MyProjects">
      <div className="TitleMyProjects">
        <SectionTitle
          Des="Portfolio"
          Title="My Creative Works Latest"
          SpanTitle="Projects"
        />
        <button>
          View Github <MdArrowOutward />
        </button>
      </div>
      <div className="containerCard">
        <MyProjectsCard
          idCard={1}
          gitHubEmail="https://github.com/abdalrhman112244"
          imgPriject="/protfolioVite/assets/img/p2.png"
          PageProjects="/Projects/1"
          h3Card="Headphones selling site"
          pCard="Html-Css3-Vanilla javscript"
          demoProject="https://abdalrhman112244.github.io/abdalrhmanberkdar/"
          iconDemo="/protfolioVite/assets/img/i1.svg"
        />
        <MyProjectsCard
          idCard={2}
          gitHubEmail="https://github.com/abdalrhman112244"
          imgPriject="/protfolioVite/assets/img/p1.png"
          PageProjects="/Projects/2"
          h3Card="Travel site"
          pCard="React.js"
          demoProject="https://abdalrhman112244.github.io/abdalrhmanberkdar/"
          iconDemo="/protfolioVite/assets/img/i1.svg"
        />
        <MyProjectsCard
          idCard={3}
          gitHubEmail="https://github.com/abdalrhman112244"
          imgPriject="/protfolioVite/assets/img/p3.png"
          PageProjects="/Projects/3"
          h3Card="Rock paper scissors game"
          pCard="Html-Css3-Vanilla javscript"
          demoProject="https://abdalrhman112244.github.io/abdalrhmanberkdar/"
          iconDemo="/protfolioVite/assets/img/i1.svg"
        />
        <MyProjectsCard
          idCard={4}
          gitHubEmail="https://github.com/abdalrhman112244"
          imgPriject="/protfolioVite/assets/img/p4.png"
          PageProjects="/Projects/4"
          h3Card="Personal website"
          pCard="Html-Css3-Vanilla javscript"
          demoProject="https://abdalrhman112244.github.io/abdalrhmanberkdar/"
          iconDemo="/protfolioVite/assets/img/i1.svg"
        />
        <MyProjectsCard
          idCard={5}
          gitHubEmail="https://github.com/abdalrhman112244"
          imgPriject="/protfolioVite/assets/img/p5.png"
          PageProjects="/Projects/5"
          h3Card="Educational Platform"
          pCard="Html-Css3-Vanilla javscript"
          demoProject="https://abdalrhman112244.github.io/abdalrhmanberkdar/"
          iconDemo="/protfolioVite/assets/img/i1.svg"
        />
        <MyProjectsCard
          idCard={6}
          gitHubEmail="https://github.com/abdalrhman112244"
          imgPriject="/protfolioVite/assets/img/p6.png"
          PageProjects="/Projects/6"
          h3Card="Mobile phone sales site"
          pCard="Html-Css3-Vanilla javscript"
          demoProject="https://abdalrhman112244.github.io/abdalrhmanberkdar/"
          iconDemo="/protfolioVite/assets/img/i1.svg"
        />
      </div>
    </div>
  );
};

export default MyProjects;
