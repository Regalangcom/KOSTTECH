import React from 'react'
import Typewriter from "typewriter-effect";



const JumbotronPage = () => {
  return (
    <div className='bg-theme min-h-screen flex items-center justify-center'>
      <div className='container text-center px-4 md:px-8 lg:px-16 lg:relative z-40'>
        <div className='w-full'>
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold'>
            <Typewriter 
              options={{
                autoStart : true,
                loop : true,
                delay : 50,
                strings : [
                  "Welcome to Our Organizations.",
                  "Member By",
                  "Hello i'am Mahyudin",
                  "Hello i'am Rizal",
                  "Hello i'am Galang",
                  "Hello i'am Irsyad"
                ]
              }}
            />
           
          </h1>
          <p className='mt-10 md:mt-20 lg:mt-32 text-lg md:text-xl lg:text-2xl'>We are ready to help you with your web and mobile service needs.</p> 
          <div className='flex justify-center mt-5 p-2 gap-2'>
            <button className='btn-global text-sm'>Be Friends</button>
            <button className='btn'>Fitur Premium</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JumbotronPage;


