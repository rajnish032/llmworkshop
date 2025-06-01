import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Organiser from "./pages/Organiser";
import Programme from "./pages/Programme";
import Callforus from "./pages/Callforus";
function App() {
  

  return (
    
     <BrowserRouter>
      <Navbar />
    <Routes>
      
      <Route path="/" element={<Home />}/>
      <Route path="/organiser" element={<Organiser />}/>
      <Route path="/workshopprogramme" element={<Programme />}/>
      <Route path="/callforus" element={<Callforus />}/>
    </Routes>
    <Footer />
  </BrowserRouter>
    
  )
}

export default App
