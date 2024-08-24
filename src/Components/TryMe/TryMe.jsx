import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./TryMe.css";

const TryMe = () => {
  return (
    <div className="Rectangle">
      <div className="TryMe">
        <div className="TryMePart1">
          <h2>Try me out, risk free!</h2>
          <p>
            If you’re not happy with the design after the first draft, I’ll
            refund your deposit, <span>no questions asked</span>
          </p>
        </div>
        <div className="TryMePart2">
          <button>
            Contact <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TryMe;
