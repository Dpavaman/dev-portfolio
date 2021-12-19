import React from "react";
import { DiGithubFull } from "react-icons/di";
import { TiSocialLinkedin } from "react-icons/ti";
import { SiMaildotru } from "react-icons/si";

const Footer = () => {
  return (
    <div className="py-5 border-t-3/2  ">
      <div className="flex justify-center mt-4">
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
      <div className="flex justify-center mt-4">
        <p className="text-black mb-4">
          Made with{" "}
          <span className="mr-2" role="link" aria-label="heart">
            💙
          </span>{" "}
          by{" "}
          <a
            className="text-blue-500 hover:underline cursor-pointer"
            href="mailto:pavaman@gmail.com"
          >
            Pavaman Dabeer
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
