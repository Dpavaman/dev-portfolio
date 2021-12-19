import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import { BsChevronDoubleDown } from "react-icons/bs";

const About = () => {
  return (
    <div className="max-w-4xl mt-20 mx-auto">
      <p className="text-2xl text-black md:text-4xl font-bold text-center">
        Hey 👋
      </p>
      <p className="text-base sm:text-xl text-center text-gray-600 leading-relaxed mt-4 ">
        I'm Pavaman Dabeer, Passionate and more interested in decentralized
        technologies. I enjoy creating things that live on the internet. My
        experience involved coding and testing/debugging aspects of web
        development.
      </p>

      <ScrollIntoView selector="#scroller">
        <div className="mx-auto p-20 cursor-pointer">
          <BsChevronDoubleDown className="animate-bounce mx-auto text-3xl text-blue-500" />
        </div>
      </ScrollIntoView>
    </div>
  );
};

export default About;
