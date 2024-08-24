import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderProject.css";
import MyProjectsCard from "./../MyProjectsCard/MyProjectsCard";
import SectionTitle from "./../SectionTitle/SectionTitle";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useParams } from "react-router-dom";

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
        <MyProjectsCard
          gitHubEmail="https://github.com/abdalrhman112244"
          imgPriject="/protfolioVite/assets/img/p2.png"
          PageProjects="/Projects/1"
          h3Card="Headphones selling site"
          pCard="Html-Css3-Vanilla javscript"
          demoProject="https://abdalrhman112244.github.io/abdalrhmanberkdar/"
          iconDemo="/protfolioVite/assets/img/i1.svg"
        />
        <MyProjectsCard
          gitHubEmail="https://github.com/abdalrhman112244"
          imgPriject="/protfolioVite/assets/img/p1.png"
          PageProjects="/Projects/2"
          h3Card="Travel site"
          pCard="React.js"
          demoProject="https://abdalrhman112244.github.io/abdalrhmanberkdar/"
          iconDemo="/protfolioVite/assets/img/i1.svg"
        />
        <MyProjectsCard
          gitHubEmail="https://github.com/abdalrhman112244"
          imgPriject="/protfolioVite/assets/img/p3.png"
          PageProjects="/Projects/3"
          h3Card="Rock paper scissors game"
          pCard="Html-Css3-Vanilla javscript"
          demoProject="https://abdalrhman112244.github.io/abdalrhmanberkdar/"
          iconDemo="/protfolioVite/assets/img/i1.svg"
        />
        <MyProjectsCard
          gitHubEmail="https://github.com/abdalrhman112244"
          imgPriject="/protfolioVite/assets/img/p4.png"
          PageProjects="/Projects/4"
          h3Card="Personal website"
          pCard="Html-Css3-Vanilla javscript"
          demoProject="https://abdalrhman112244.github.io/abdalrhmanberkdar/"
          iconDemo="/protfolioVite/assets/img/i1.svg"
        />
        <MyProjectsCard
          gitHubEmail="https://github.com/abdalrhman112244"
          imgPriject="/protfolioVite/assets/img/p5.png"
          PageProjects="/Projects/5"
          h3Card="Educational Platform"
          pCard="Html-Css3-Vanilla javscript"
          demoProject="https://abdalrhman112244.github.io/abdalrhmanberkdar/"
          iconDemo="/protfolioVite/assets/img/i1.svg"
        />
        <MyProjectsCard
          gitHubEmail="https://github.com/abdalrhman112244"
          imgPriject="/protfolioVite/assets/img/p6.png"
          PageProjects="/Projects/6"
          h3Card="Mobile phone sales site"
          pCard="Html-Css3-Vanilla javscript"
          demoProject="https://abdalrhman112244.github.io/abdalrhmanberkdar/"
          iconDemo="/protfolioVite/assets/img/i1.svg"
        />
      </Slider>
    </div>
  );
}

export default SliderProject;
