import "./FormContent.css";
const FormContent = () => {
  return (
    <form>
      <div className="GropET">
        <input type="text" placeholder="Full name" />
        <input type="email" placeholder="Your email" />
      </div>
      <input type="tel" placeholder="Phone number"/>
      <textarea placeholder="Message" ></textarea>
      <button>Send Message</button>
    </form>
  );
};

export default FormContent;
