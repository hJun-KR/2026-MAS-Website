import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import OurPrize from "./pages/OurPrize.jsx";
import Prize from "./pages/Prize.jsx";
import Members from "./pages/Members";
import Projects from "./pages/Projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/ourPrize" element={<OurPrize />} />
      <Route path="/prize" element={<Prize />} />
      <Route path="/members" element={<Members />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
export default App;
