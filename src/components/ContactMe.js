import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className="max-w-lg w-full text-center m-auto pt-30 pb-10">
      <h1 className="text-2xl md:text-4xl">Interested in working together?</h1>
      <a href="mailto:pavamandabeer@gmail.com">
        <span className="mt-6 inline-block w-auto bg-black font-dispaly text-white text-base md:text-xl py-4 px-4 cursor-pointer">
          <div className="flex flex-row items-center">
            <span className="mr-3"> Get in touch</span>
            <FaArrowRight />
          </div>
        </span>
      </a>
    </div>
  );
};

export default ContactMe;
