/* eslint-disable @next/next/no-img-element */
import React from "react";

const Card1 = () => {
  return (
    <>
      <div className="w-full h-full absolute p-3">
        <img
          // src="/AboutMe.png
          src="/img_2.png"
          alt="aboutMe"
          className="object-cover md:object-contain lg:object-cover object-center h-full w-full hover:scale-105 rounded-2xl duration-200"
        />
      </div>
    </>
  );
};

export default Card1;
