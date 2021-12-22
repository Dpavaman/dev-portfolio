import React from "react";
import image from "../images/image.jpeg";
import { DiGithubFull } from "react-icons/di";
import { TiSocialLinkedin } from "react-icons/ti";
import { SiMaildotru } from "react-icons/si";

const Card = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center flex-col max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <img
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
            src={image}
            alt="Profile"
          />
        </div>
        <div className=" text-center mt-5  ">
          <p className="text-xl sm:text-2xl  text-gray-900">Pavaman Dabeer</p>
        </div>
        <div className=" text-center mt-5  ">
          <p className="text-xs sm:text-base  text-gray-600 pt-2 pb-4 px-1.5 w-auto inline-block border-b-2 ">
            Full Stack Web Developer
          </p>
          <div className="flex align-center justify-center mt-4">
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300 "
              href="https://github.com/Dpavaman"
              target="_blank"
              rel="noreferrer"
            >
              <DiGithubFull />
              <span className="sr-only">Github</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300 "
              href="https://www.linkedin.com/in/pavaman-dabeer/"
              target="_blank"
              rel="noreferrer"
            >
              <TiSocialLinkedin />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300 "
              href="mailto:pavamandabeer@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <SiMaildotru />
              <span className="sr-only">Mail</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
