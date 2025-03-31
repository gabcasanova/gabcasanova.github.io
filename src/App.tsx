import { useEffect } from "react";
import Home from "./pages/Home";
import "./styles.css";

import { HashRouter, Route, Routes } from "react-router";
import i18n from "./i18n";

function App() {
  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
