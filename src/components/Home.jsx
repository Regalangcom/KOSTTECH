import React, { useState } from "react";
import "../style/Home.css";
import TeamProf from "../data/TeamProfile";
// import CreditComponent from "../components/CreditComponent.jsx";
import { useNavigate } from "react-router-dom";

const Home = ()  => {
  const [isCreditsPopUpOpen, setCreditsPopUpOpen] = useState(false);


  const navigate = useNavigate();
  
  function redirectToStory(TeamProfMe) {
    navigate(`/story/${TeamProfMe.nama.toLowerCase()}`);
  }
  function renderCategoryItem () {
    return TeamProf.map((TeamProfMe) => {
      return (
        <div
          className="flex justify-center items-center flex-col  cursor-pointer"
          key={TeamProfMe.nama + TeamProfMe.role}
          onClick={() => redirectToStory(TeamProfMe)}
        >
          {/* <div className="category-outer-circle flex justify-center items-center">
            <div className="category-inner-circle flex justify-center items-center">
              <i className="material-icons text-sm text-black">{TeamProfMe.role}</i>
            </div>
          </div> */}
          <div className="category-outer-circle flex justify-center items-center rounded-full overflow-hidden">
            <div className="category-inner-circle flex justify-center items-center rounded-full overflow-hidden">
               <img src= {TeamProfMe.role} alt="Description" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="font-bold">{TeamProfMe.nama}</div>
        </div>
      );
    });
  }
  return (
    <div className="bg-theme  h-[600px]">
      <div className="max-w-screen-lg mx-auto flex flex-col p-20 items-center justify-start   px-4 md:flex-row gap-8  ">
        <h2 className="text-3xl mb-6 inline border-b-4">Stories Feed</h2>
        <div
          className="fixed top-3 right-4 cursor-pointer"
          onClick={() => setCreditsPopUpOpen(true)}
        >
        </div>
      </div>
      <div className="flex justify-center items-center mt-7">
        <div className="grid grid-cols-4 w-screen flex justify-center items-center max-w-screen-md">
          {renderCategoryItem()}
        </div>
      </div>

    </div>
  );
}

export default Home