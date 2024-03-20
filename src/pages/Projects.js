import React from "react";
import { project } from "../data";
const Projects = () => {
  const datas = project;

  return (
    <div className=" text-center  mt-6 p-5">
      <h1 className="text-blue-900 text-5xl font-bold">Project's </h1>

      <div className=" grid grid-cols-1 md:grid-cols-2  
        lg:grid-cols-3 ">
        {datas.map((data) => {
          return (
            <div className=" rounded shadow-xl shadow-slate-500 p-10 hover:translate-y-1 ">
              <div key={data.id}>
              <div className=" text-left ">
              <h2 className="text-green-600 font-semibold">Project Name</h2>
                <p className="text-gray-400">{data.title}</p>
              </div>
              <div className=" text-left">
              <h2 className="text-green-600 font-semibold">Technologies Uses</h2>
                 <p className=" text-gray-400">{data.techUse}</p>
              </div>
                
               
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
