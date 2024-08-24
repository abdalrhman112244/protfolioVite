import "./SectionTitle.css";

const SectionTitle = ({ Des, Title, SpanTitle , Pos}) => {
  return (
    <div className="SectionTitle">
      <p style={{textAlign:`${Pos}`}}>{Des}</p>
      <h1 style={{textAlign:`${Pos}`}}>
        {Title} <span>{SpanTitle}</span>
      </h1>
    </div>
  );
};

export default SectionTitle;
