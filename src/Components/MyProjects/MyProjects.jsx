import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { MdArrowOutward } from "react-icons/md";
import "./MyProjects.css";
import MyProjectsCard from "../MyProjectsCard/MyProjectsCard";

export const myProjectsData = [
  {
    id: 1,
    gitHubEmail: "https://github.com/abdalrhman112244",
    imgProject: "/protfolioVite/assets/img/p2.png",
    pageProjects: "/Projects/1",
    h3Card: "Headphones selling site",
    pCard: "Html-Css3-Vanilla javscript",
    demoProject: "https://abdalrhman112244.github.io/abdalrhmanberkdar/",
    iconDemo: "/protfolioVite/assets/img/i1.svg",
    spanH: "12-5-2024",
    Description: "A site for selling the latest types of modern headphones",
    Framework:"I don't use any framework.",
    Libraries :"I don't use any library."
  },
  {
    id: 2,
    gitHubEmail: "https://github.com/abdalrhman112244",
    imgProject: "/protfolioVite/assets/img/p1.png",
    pageProjects: "/Projects/2",
    h3Card: "Travel site",
    pCard: "Html-Css3-Vanilla javscript",
    demoProject: "https://abdalrhman112244.github.io/react_project1/",
    iconDemo: "/protfolioVite/assets/img/i1.svg",
    spanH: "12-5-2024",
    Description:"A site that shows you all available flights and you can contact us to book your seat",
    Framework:"I don't use any framework.",
    Libraries :"React.js"
  },
  {
    id: 3,
    gitHubEmail: "https://github.com/abdalrhman112244",
    imgProject: "/protfolioVite/assets/img/p3.png",
    pageProjects: "/Projects/3",
    h3Card: "Rock paper scissors game",
    pCard: "Html-Css3-Vanilla javscript",
    demoProject: "https://abdalrhman112244.github.io/JS-project-8/",
    iconDemo: "/protfolioVite/assets/img/i1.svg",
    spanH: "12-5-2024",
    Description :"Rock Paper Scissors game to play for fun with your computer",
    Framework:"I don't use any framework.",
    Libraries :"I don't use any library."
  },
  {
    id: 4,
    gitHubEmail: "https://github.com/abdalrhman112244",
    imgProject: "/protfolioVite/assets/img/p4.png",
    pageProjects: "/Projects/4",
    h3Card: "Personal website",
    pCard: "Html-Css3-Vanilla javscript",
    demoProject: "https://abdalrhman112244.github.io/MyProtfoilo/",
    iconDemo: "/protfolioVite/assets/img/i1.svg",
    spanH: "12-5-2024",
    Description : "A website and gallery for your work",
    Framework:"I don't use any framework.",
    Libraries :"I don't use any library."
  },
  {
    id: 5,
    gitHubEmail: "https://github.com/abdalrhman112244",
    imgProject: "/protfolioVite/assets/img/p5.png",
    pageProjects: "/Projects/5",
    h3Card: "Educational Platform",
    pCard: "Html-Css3-Vanilla javscript",
    demoProject: "https://abdalrhman112244.github.io/task4-2/",
    iconDemo: "/protfolioVite/assets/img/i1.svg",
    spanH: "12-5-2024",
    Description: "An online education platform that provides you with many courses to study and is easy to use.",
    Framework:"I don't use any framework.",
    Libraries :"I don't use any library."
  },
  {
    id: 6,
    gitHubEmail: "https://github.com/abdalrhman112244",
    imgProject: "/protfolioVite/assets/img/p6.png",
    pageProjects: "/Projects/6",
    h3Card: "Mobile phone sales site",
    pCard: "Html-Css3-Vanilla javscript",
    demoProject: "https://abdalrhman112244.github.io/Task5-1-2/",
    iconDemo: "/protfolioVite/assets/img/i1.svg",
    spanH: "12-5-2024",
    Description:"A website for selling all mobile devices around the world, characterized by ease of use",
    Framework:"I don't use any framework.",
    Libraries :"I don't use any library."
  },
];

const MyProjects = () => {
  return (
    <div id="Projects" className="MyProjects">
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
        {myProjectsData.map((project) => (
          <MyProjectsCard
            key={project.id}
            idCard={project.id}
            gitHubEmail={project.gitHubEmail}
            imgProject={project.imgProject}
            PageProjects={project.pageProjects}
            h3Card={project.h3Card}
            pCard={project.pCard}
            demoProject={project.demoProject}
            iconDemo={project.iconDemo}
          />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
