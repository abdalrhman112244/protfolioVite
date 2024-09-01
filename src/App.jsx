import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Page/Home/Home";
import Footer from "./Components/Footer/Footer";
import Projects from "./Page/Projects/Projects";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const menu = [
    {
      titleName: "Home",
      url: "/",
    },
    {
      titleName: "About me",
      url: "#AboutMe",
    },
    {
      titleName: "Education",
      url: "#Education",
    },
    {
      titleName: "Projects",
      url: "#Projects",
    },
    {
      titleName: "Contact",
      url: "#Contact",
    },
  ];

  return (
    <div className={`app ${theme}`}>
      <NavBar titleLogo="EN.AbdAlRhman" menu={menu} theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects/:id" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
