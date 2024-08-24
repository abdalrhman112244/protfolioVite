import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Page/Home/Home";
import Footer from "./Components/Footer/Footer";
import Projects from "./Page/Projects/Projects";

function App() {
  const menu = [
    {
      titleName: "Home",
      url: "/",
    },
    {
      titleName: "About me",
      url: "/AboutMe",
    },
    {
      titleName: "Education",
      url: "/Education",
    },
    {
      titleName: "Projects",
      url: "/Projects",
    },
    {
      titleName: "Contact",
      url: "/Contact",
    },
  ];

  return (
    <>
        <NavBar titleLogo="EN.AbdAlRhman" menu={menu} />
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/Projects" element = {<Projects />}/>
          </Routes>
        <Footer /> 
    </>
  );
}

export default App;
