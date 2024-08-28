import "./DesCardP.css";

const DesCardP = ({project}) => {
  if(project)
  return (
    <div className="DesCardP">
      <img className="imgProject" src={project?.imgProject} alt="" />
      <div className="bodyDesCardP">
        <div className="gropBtnPS">
          <div className="gropPS">
            <h3>{project?.h3Card}</h3>
            <span>{project?.spanH}</span>
          </div>
          <button>
            <img src={project.iconDemo} alt="" />
          </button>
        </div>
        <p>
          {project.Description}
        </p>
        <div className="InfoProject">
          <p>
            Basic Languages : <span>{project.pCard}</span>
          </p>
          <p>
            Framework : <span>{project.Framework}</span>
          </p>
          <p>
            Libraries : <span>{project.Libraries}</span>
          </p>
        </div>
        <button>Github Repo</button>
      </div>
    </div>
  );
};

export default DesCardP;
