import React from "react";
import { skills } from "../data";

const Skills = () => {
  const datas = skills.languages;
  const databs = skills.database;
  const fram = skills.frameworks;


  return (
    <div className=" text-center scroll-smooth  mt-4 ">
      <h1 className="text-blue-900 text-5xl font-bold">Skill's</h1>

      <div
        className=" grid grid-cols-1 md:grid-cols-2  
        lg:grid-cols-3 gap-3"
      >
      <div>
      <h2  className=" text-center text-lime-700 font-bold">Languages</h2>
         {datas.map((data,id) => {
          return (
            <div className=" rounded shadow-xl shadow-slate-500  p-6 hover:translate-y-1 " >
            <div key={id}>
              <p  className="  text-green-600  font-bold">{data.lang}</p>
              <p className=" text-gray-400 text-right">{data.level}</p>
            </div>
            </div>
          );
        })}
      </div>
       
        <div>
        <h2  className=" text-center text-lime-700 font-bold">Databses </h2>
          {databs.map((data, id) => {
            return (
              <div  className=" rounded shadow-xl shadow-slate-500  p-10 hover:translate-y-1 ">
                
              <div key={id}>
                <p className="text-green-600 text-left font-bold">{data.dbsy}</p>
                <p className=" text-gray-400">{data.level}</p>
               
              </div> </div>
             
            );
          })}
        </div>

        <div>
        <h2  className=" text-center text-lime-700 font-bold">Web-Technology</h2>
          {fram.map((data, id) => {
            return (
              <div  className=" rounded shadow-xl shadow-slate-500  p-12 hover:translate-y-1">
                <div key={id}>
                <p className="text-green-600 font-bold text-center  ">{data.lib}</p>
              
              </div>
              </div>
              
            );
          })}
        </div>
      </div>
    </div>

  
  );
};

export default Skills;
