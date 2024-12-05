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
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link to={"/"}>
          <img className="hover:cursor-pointer" src={assets.logo} alt="Logo" />
        </Link>
        {isLogin ? (
          <div className="flex items-center gap-2.5">
            <button className="flex items-center gap-2 rounded-full bg-blue-100 px-10 py-4 text-neutral-600">
              <img src={assets.credit_star} alt="star icon" /> Credits left: 4
            </button>
            <h1 className="p-2 text-base text-neutral-600">Hi! Richard</h1>
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
                } absolute right-0 top-16 w-24 rounded-full border bg-white px-4 py-2 shadow active:border-red-200`}
              >
                Log Out
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2.5">
            <Link
              to={"/pricing"}
              className="cursor-pointer p-2 text-neutral-600 hover:underline"
            >
              Pricing
            </Link>
            <Link
              to={"/result"}
              className="rounded-full bg-black px-14 py-2.5 text-white"
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
