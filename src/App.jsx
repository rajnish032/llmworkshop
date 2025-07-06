import { BrowserRouter,Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Organiser from "./pages/Organiser";
import ProgramSchedule from "./pages/Programme";
import WorkshopInfo from "./pages/WorkshopInfo"
function App() {
  

  return (
    
     <BrowserRouter>
      <Navbar />
    <Routes>
      
      <Route path="/" element={<Home />}/>
      <Route path="/organiser" element={<Organiser />}/>
      <Route path="/workshopprogramme" element={<ProgramSchedule />}/>
      <Route path="/workshopinfo" element={<WorkshopInfo />}/>
    </Routes>
    <Footer />
  </BrowserRouter>
    
  )
}

export default App
