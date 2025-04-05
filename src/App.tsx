import "./styles.css";

import { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router";
import i18n from "./i18n";

import Home from "./pages/Home";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Experience from "./pages/Experience";

function App() {
  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectName" element={<Project />} />
        <Route path="/exp" element={<Experience />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
