import React from "react";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJest,
} from "react-icons/si";
import webComponent from "../images/webcomponent.svg";

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="skills">
      <p className="text-2xl text-black md:text-4xl font-bold pt-4 ">
        Technologies I work with
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiJavascript color="#F0DB4F" className="mx-auto text-6xl" />
          <p className="mt-6 mx-auto text-xl sm:text-2xl font-semibold text-center">
            JavaScript
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiReact color="#61DBFB" className="mx-auto text-6xl" />
          <p className="mt-6 mx-auto text-xl sm:text-2xl font-semibold text-center">
            React
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiNodedotjs color="#3C873A" className="mx-auto text-6xl" />
          <p className="mt-6 mx-auto text-xl sm:text-2xl font-semibold text-center">
            Node.js
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <img
            className=" mx-auto h-12 "
            src={webComponent}
            alt="Web component"
          />
          <p className="mt-6 mx-auto sm:text-2xl font-semibold text-center">
            Web Components
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiMongodb color="#4DB33D" className="mx-auto text-6xl" />
          <p className="mt-6 mx-auto text-xl sm:text-2xl font-semibold text-center">
            MongoDB
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiExpress className="mx-auto text-6xl" />
          <p className="mt-6 mx-auto text-xl sm:text-2xl font-semibold text-center">
            Express.js
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiTailwindcss className="mx-auto text-6xl text-blue-400" />
          <p className="mt-6 mx-auto text-xl sm:text-2xl font-semibold text-center">
            TailwindCSS
          </p>
        </div>

        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiJest className="mx-auto text-6xl text-red-400" />
          <p className="mt-6 mx-auto text-xl sm:text-2xl font-semibold text-center">
            Jest
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
