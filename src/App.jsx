// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Background from "./Components/Background";

import Navbar from "./Components/Navbar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  

  return (
    <Router>
      <Background/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
