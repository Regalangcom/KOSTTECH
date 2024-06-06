import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import Images from "../assets/kosttech.jpeg";


const BioShort = () => {
  return (
    <div name="About" className="md:h-screen  bg-theme">
      <div className="max-w-screen-lg  mx-auto flex flex-col relative items-center justify-start h-full px-4 md:flex-row gap-8  ">
        <div className="">
          <img
            src={Images}
            alt=""
            style={{ width: "300px" }}
            className="rounded-2xl mx-auto w-2/3 md:flex-full"
          />
        </div>
        <div className="max-w-screen-sm p-4 mx-auto flex flex-col justify-center w-full h-3/5 lg:relative z-40">
          <div className="pb-8 ">
            <p className="text-3xl mb-6 inline border-b-4">About Kost Tech</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            harum saepe neque veritatis dignissimos culpa qui dolorum adipisci
            nihil. Magnam architecto dolores quia debitis facilis incidunt,
            officiis, saepe nihil totam voluptas modi consequatur ad nostrum
            mollitia! Quidem modi unde minima blanditiis ipsam et distinctio
            veritatis!
          </p>
          <div className='flex justify-start mt-5 p-2 gap-2 mb-7'>
            <button className="btn-global w-2/2 mt-2 flex items-center justify-between">
              <span className="text-sm">Be friends with us</span>
              <span className="ml-2"><FaArrowCircleRight /></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioShort;
