import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Cursos from "../pages/Cursos";
import Trabajos from "../pages/Trabajos";
import AboutMe from "../pages/aboutMe";     
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/aboutMe" element={<AboutMe />} />  
        <Route path="/Cursos" element={<Cursos />} />
        <Route path="/Trabajos/:title" element={<Trabajos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
