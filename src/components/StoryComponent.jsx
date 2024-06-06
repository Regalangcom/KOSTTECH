import React, { useState } from "react";
// import  from "react-insta-stories";
// import ReactInstaStories from "react-insta-stories";
import Stories from 'react-insta-stories';
import { useNavigate, useParams } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import TeamBio from "../data/TeamBio.js";


import "../style/Story.css"



const StorySection  = () =>  {

    const [loading , setloading] = useState(true)

    const {datas} = useParams();

    const navigate = useNavigate()

    const redirectHome = () => {
        navigate("/")
    }



    function getStoriesObject() {
        // const category = match.params.categoryName;
        const stories = TeamBio[datas].map((item) => {
          if (item.type === "imageCaptionPost") {
            return {
              content: () => (
                <div className="story-container bg-black w-screen h-screen  flex items-start justify-center">
                  <div
                    className="w-full h-full bg-black max-w-screen-md flex items-center justify-center flex-col bg-center "
                    style={{ backgroundImage: `url(${item.image})` , backgroundSize : "cover"}}
                  >
                    <div
                      className="mt-12 caption text-5xl font-bold"
                      style={{ color: item.captionColor }}
                    >
                      <span>{ item.captions }</span>
                    </div>
                  </div>
                </div>
              ),
            };
          } else if (item.type === "titleImageTextPost") {
            return {
              content: () => (
                <div
                  className="story-container h-screen w-screen bg-center bg-no-repeat bg-black text-white font-bold flex items-start justify-center"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <div className="max-w-screen-md flex items-center justify-center flex-col">
                    <div className="mt-10 text-x">
                      <span>{item.captions}</span>
                    </div>
                    <div className="flex flex justify-center items-center mt-2 text-story-image-container">
                      {/* <div style={{ display: loading ? "block" : "none" }}>
                        {renderLoading()}
                      </div> */}
                      <div style={{ display: loading ? "none" : "block" }}>
                        <img
                          src={item.image}
                          alt="stories"
                          className="h-6/12"
                          onLoad={() => setloading(false)}
                        />
                      </div>
                    </div>
                    <div className="mt-6 caption text-lg text-left mx-3 max-w-screen-md">
                      <span className="whitespace-pre-wrap">{item.text}</span>
                    </div>
                  </div>
                </div>
              ),
            };
          } else {
            return null;
          }
        });
        return stories;
      }

    return (
        <div className="stories-container w-screen h-screen">
      <Fade right>
        <Stories
          stories={getStoriesObject()}
          defaultInterval={4000}
          width={"100%"}
          height="100vh"
          onAllStoriesEnd={redirectHome}
          onStoryEnd={() => setloading(true)}
        />
      </Fade>
    </div>
    )

}

export default StorySection