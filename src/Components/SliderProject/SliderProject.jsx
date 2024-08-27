import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderProject.css";
import MyProjectsCard from "./../MyProjectsCard/MyProjectsCard";
import SectionTitle from "./../SectionTitle/SectionTitle";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useParams } from "react-router-dom";
import { myProjectsData } from "../MyProjects/MyProjects";

function SliderProject() {
  const idCard = useParams();
  console.log(idCard);
  let sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <div className="gropBtnsT">
        <SectionTitle Des="Portfolio" Title="The Best " SpanTitle="Projects" />
        <div className="PrevNext">
          <button className="button" onClick={previous}>
            <IoIosArrowDropleft />
          </button>
          <button className="button" onClick={next}>
            <IoIosArrowDropright />
          </button>
        </div>
      </div>
      <Slider
        ref={sliderRef} // Pass the ref directly
        {...settings}
      >
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
      </Slider>
    </div>
  );
}

export default SliderProject;
