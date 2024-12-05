import { useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

export default function Navbar({ isLogin, setIslogin }) {
  const handleIslogin = () => {
    setIslogin(true);
  };
  const [togglelogout, setTogglelogout] = useState(false);
  const handleTogglelogout = () => {
    setTogglelogout(!togglelogout);
  };

  const handleLogout = () => {
    setIslogin(false);
    setTogglelogout(false);
  };
  return (
    <div className="bg-teal-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-2">
        <Link to={"/"}>
          <img className=" hover:cursor-pointer" src={assets.logo} alt="Logo" />
        </Link>
        {isLogin ? (
          <div className="flex gap-2.5 items-center">
            <button className="py-4 px-10 bg-blue-100 text-neutral-600 rounded-full flex gap-2 items-center">
              <img src={assets.credit_star} alt="star icon" /> Credits left: 4
            </button>
            <h1 className="p-2 text-neutral-600 text-base">Hi! Richard</h1>
            <div className="relative">
              <img
                className="w-11 hover:cursor-pointer"
                src={assets.profile_icon}
                alt="profile icon"
                onClick={handleTogglelogout}
              />
              <Link
                to={"/"}
                onClick={handleLogout}
                className={`${
                  togglelogout ? "" : "hidden"
                } py-2 px-4 rounded-full shadow bg-white absolute w-24 right-0 top-16  active:border-red-200 border  `}
              >
                Log Out
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex gap-2.5 items-center">
            <Link to={"/pricing"} className="p-2 cursor-pointer text-neutral-600 hover:underline">
              Pricing
            </Link>
            <Link
              to={"/result"}
              className="py-2.5 px-14 bg-black text-white rounded-full"
              onClick={handleIslogin}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
