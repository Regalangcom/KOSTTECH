import React from "react";
import Images1 from "../assets/comingsoon.png";

const Portofolio = () => {
  const PortofolioMapping = [
    {
      id: 1,
      src: Images1,
    },
    {
      id: 2,
      src: Images1,
    },
    {
      id: 3,
      src: Images1,
    },
    {
      id: 4,
      src: Images1,
    },
  ];

  return (
    <div
      name="portofolio"
      className="bg-theme"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-3/5 sm:mt-90  ">
        <div className="pb-8 ">
          <p className="text-3xl inline border-b-4 m-4">Portofolio</p>
        </div>
        <div className="flex flex-wrap ">
          {PortofolioMapping.map(({ id, src }, i) => (
            <div id={id} className="w-full md:w-1/2 lg:w-1/3 p-4 " key={i}>
              <div className="shadow-md rounded-lg lg:relative z-40">
                <img
                  src={src}
                  alt=""
                  className="rounded-md w-full duration-200 hover:scale-105 justify-center relative  items-center p-2"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Source code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
{/* <div className="flex flex-wrap">
  {PortofolioMapping.map(({ id, src }, i) => (
    <div id={id} className="w-full md:w-1/2 lg:w-1/3 p-4" key={i}>
      <div className="shadow-md rounded-lg">
        <div className="relative overflow-hidden rounded-md">
          <img
            src={src}
            alt=""
            className="w-full h-auto object-cover rounded-md duration-200 hover:scale-105"
          />
        </div>
        <div className="flex items-center justify-center mt-4">
          <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
            Demo
          </button>
          <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
            Source code
          </button>
        </div>
      </div>
    </div>
  ))}
</div> */}
