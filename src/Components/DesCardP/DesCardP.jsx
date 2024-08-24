import "./DesCardP.css";

const DesCardP = () => {
  return (
    <div className="DesCardP">
      <img src="/protfolioVite/assets/img/p2.png" alt="" />
      <div className="bodyDesCardP">
        <div className="gropBtnPS">
          <div className="gropPS">
            <h3>Educational Platform</h3>
            <span>12-5-2024</span>
          </div>
          <button>
            <img src="/protfolioVite/assets/img/i1.svg" alt="" />
          </button>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          facere, numquam necessitatibus inventore tempora placeat laborum
          doloremque in ea id repudiandae rem eaque odio quidem suscipit
          deleniti dolorum quas quibusdam.
        </p>
        <div className="InfoProject">
          <p>
            Basic Languages : <span> Html5 , Css , Javascript</span>
          </p>
          <p>
            Framework : <span>Bootstrap</span>
          </p>
          <p>
            Libraries : <span>React.js</span>
          </p>
        </div>
        <button>Github Repo</button>
      </div>
    </div>
  );
};

export default DesCardP;
