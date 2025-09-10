import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
