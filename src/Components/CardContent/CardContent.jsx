import "./CardContent.css";

const CardContent = ({ imgC, spanC, pC }) => {
  return (
    <div className="CardContent">
      <img src={imgC} alt="" />
      <div className="bodyCardContent">
        <span>{spanC}</span>
        <p>{pC}</p>
      </div>
    </div>
  );
};

export default CardContent;
