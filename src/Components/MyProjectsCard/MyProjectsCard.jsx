import { Link, useNavigate } from "react-router-dom";
import "./MyProjectsCard.css";

const MyProjectsCard = ({
  idCard,
  gitHubEmail,
  imgProject,
  PageProjects,
  h3Card,
  pCard,
  demoProject,
  iconDemo,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(PageProjects);
  };
  return (
    <div className={`MyProjectsCard card-${idCard}`}>
      <Link to={gitHubEmail}>
        <img src={imgProject} alt="" className="photoProject" />
      </Link>
      <div className="bodeyCardProject">
        <h3 onClick={handleCardClick}>{h3Card}</h3>
        <div className="GropPB">
          <p>{pCard}</p>
          <Link to={demoProject}>
            <img src={iconDemo} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProjectsCard;
