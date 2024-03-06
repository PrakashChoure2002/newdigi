
import Footer from "./Components/Footer";
import Home from "./Components/Home";
// import Background from "./Components/Background";


import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import {Provider} from 'react-redux'
import store from "./Components/store/store";


function App() {
  

  return (
     <Provider store={store}> 
    <Router>
      <Navbar/>
     
      
      {/* <Background/> */}
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        
      </Routes>
      <Footer/>
    </Router>
      </Provider> 
  )
}

export default App
