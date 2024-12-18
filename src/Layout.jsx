import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Result from "./Result";
import Footer from "./components/Footer";
import Pricing from "./Pricing";
import { useState } from "react";

export default function Layout() {
  const [isLogin, setIslogin] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar isLogin={isLogin} setIslogin={setIslogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </div>
  );
}
