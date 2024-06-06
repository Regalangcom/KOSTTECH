import React from 'react'
import Navbar from '../Navbar'
import JumbotronPage from '../JumbotronPage'
import BioShort from '../BioShort'
import Portofolio from '../Portofolio'
import Home from '../Home'
// import { Form } from '../Form'
// import ParticlesComponent from '../particaljs/partical'
import Footer from './Footer'
import "../../style/App.css"
const Index = () => {
  return (
    <div>
      <Navbar />
      <JumbotronPage />
      <BioShort />
      <Portofolio />
      <Home />
      {/* <Form /> */}
      <Footer />
      {/* <ParticlesComponent id="particles" /> */}

    </div>
  )
}

export default Index
