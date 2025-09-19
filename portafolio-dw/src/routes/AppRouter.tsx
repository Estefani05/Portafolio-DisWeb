import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cursos from "../pages/Cursos";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Trabajos from "../pages/Trabajos";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Cursos" element={<Cursos/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/Trabajos/:title" element={<Trabajos/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
