import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = ({ name, des, ref }) => {
  return (
    <div id="Hero" className="Hero">
      <div className="HeroPart1">
        <p className="Welcome">Welcome</p>
        <h1>
          <span>HEY!</span> {name}
        </h1>
        <p className="des">{des}</p>
        <button>Download Cv</button>
      </div>
      <div className="HeroPart2">
        <div className="GropImg">
          <div className="square"></div>
          <img src="/assets/img/r1.png" alt="" />
        </div>
        <div className="iconfollow">
          <p>Follow me on:</p>
          <div className="allIcon">
            <Link>
              <img src="/assets/img/facebook-4 1.png" alt="" />
            </Link>
            <Link>
              <img src="/assets/img/instagram-5 1.png" alt="" />
            </Link>
            <Link>
              <img src="/assets/img/linkedin-icon-2 1.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
