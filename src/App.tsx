import { HashRouter, Route, Routes } from "react-router";
import Home from "./pages/home";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
