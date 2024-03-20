import Projects from "./Projects";
import Skills from "./Skills";
import Educations from "./Educations";
import About from "./About";
import Navbarfooter from "../components/Navbarfooter";
import home from "../images/home.jpg";
import { PiHandWavingFill } from "react-icons/pi";

const Home = () => {
  return (
    <div className=" w-full h-full text-center  ">
      <div className="text-white ">
        <img src={home} className="h-screen w-full flex relative flex-col " />

        <div className=" relative   -top-96 ">
          <p className=" text-4xl  font-semibold flex pl-5 ">
            {" "}
            Welcome!{" "}
            <PiHandWavingFill className="   rounded-sm bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500" />{" "}
          </p>
          <p className="text-lg text-left  pl-32 mt-4 italic  ">
            I'm Gulshan Kr. Giri...
          </p>
        </div>
      </div>

      <div>
        <About />
        <Educations />
        <Skills />
        <Projects />
      </div>
      <Navbarfooter />
    </div>
  );
};

export default Home;
