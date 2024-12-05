import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Result from "./Result";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Layout() {
  const [isLogin, setIslogin] = useState(false);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLogin={isLogin} setIslogin={setIslogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      {!isLogin && <Footer />}
    </div>
  );
}
