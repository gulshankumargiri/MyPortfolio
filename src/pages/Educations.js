import React from "react";
import { CiCalendar } from "react-icons/ci";
import { education } from "../data";
const Educations = () => {
  const datas = education; 
  return (
    <div className="text-center mt-6 p-4">
      <h1 className="text-green-600 text-5xl font-bold">Education's</h1>
      <div
        className=" grid grid-cols-1 md:grid-cols-2  
        lg:grid-cols-3 "
      >
        {datas.map((data) => {
          return (
            <div className=" rounded shadow-xl shadow-slate-500 m-24 p-6 hover:scale-105  ">
              <div key={data.id}>
                <div className=" text-left ">
                  <h2 className="text-green-600 font-semibold">
                    School / College Name 
                  </h2>
                  <p className="text-gray-500">{data.title}</p>
                </div>
                <div className=" text-left ">
                  <h3 className="text-green-600 font-semibold">Course Name</h3>
                  <p className="text-gray-500">{data.degree}</p>
                </div>
                <div className=" text-left ">
                  <h4 className="text-green-600 font-semibold">
                    Completion Date
                  </h4>
                  <p className="text-gray-500 flex gap-3 text-center">
                    <CiCalendar />
                    {data.year}
                  </p>
                </div>
                <div className=" text-left ">
                  <h5 className="text-green-600 font-semibold">
                    Board/ University Name
                  </h5>
                  <p className="text-gray-500 ">{data.board}</p>
                </div>

                <div className=" text-left ">
                  <h6 className="text-green-600 font-semibold">Percentage</h6>
                  <p className="text-gray-500 flex">
                    {data.aggregate} <span>%</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Educations;
