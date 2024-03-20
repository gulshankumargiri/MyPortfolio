import Navbar from "./components/Navbar";
import Home from "../src/pages/Home";
import Projects from "../src/pages/Projects";
import Contact from "../src/pages/Contact";
import Educations from "../src/pages/Educations";
import Skills from "../src/pages/Skills";
import About from "../src/pages/About";
import { Route, Routes } from "react-router-dom";
import Navbarfooter from "./components/Navbarfooter";

const App = () => {
  return (
    <div>

      <div className=" bg-slate-900  ">
        <Navbar />
      </div> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/education" element={<Educations />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
<div className=" bg-neutral-600 bottom-0 fixed  w-full">
    <Navbarfooter/>
</div>
    
    </div>
   
  );
};

export default App;
