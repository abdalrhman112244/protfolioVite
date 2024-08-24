import CardContent from "../CardContent/CardContent";
import FormContent from "../FormContent/FormContent";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      <SectionTitle
        Des="Contact"
        Title="Let’s Discuss Your "
        SpanTitle="Project"
      />
      <div className="containerContact">
        <div className="ContactPart1">
          <CardContent
            imgC="/protfolioVite/assets/img/T.png"
            spanC="Call me"
            pC="+963940351643"
          />
          <CardContent
            imgC="/protfolioVite/assets/img/E.png"
            spanC="Email me"
            pC="abdalrhmanberkdar5@gmail.com"
          />
          <CardContent
            imgC="/protfolioVite/assets/img/T.png"
            spanC="Address"
            pC="Latakia,syria"
          />
        </div>
        <div className="ContactPart2">
          <FormContent />
        </div>
      </div>
    </div>
  );
};

export default Contact;
