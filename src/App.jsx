import React from "react"
import Indexs from "./components/pages/index.jsx";
import "./index.css";
import { Routes , Route } from "react-router-dom";
import StorySection from "./components/StoryComponent.jsx";
import Form  from "./components/Form.jsx";
import "./style/App.css"
import ParticlesTest from "./components/particaljs/partical.jsx";
function App() {
  

  return (
    <>
    <div className="App">
      <ParticlesTest />
      <Routes>
        <Route path="/" element={<Indexs />} />
        <Route path="/form" element={<Form />} />
        <Route path="/story/:datas" element={<StorySection />} />
      </Routes>
  
    </div>
    </>
  )
}

export default App

