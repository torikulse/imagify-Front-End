import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

export default function Navbar({ isLogin, setIslogin }) {
  const [togglelogout, setTogglelogout] = useState(false);
  const handleTogglelogout = () => {
    setTogglelogout(!togglelogout);
  };

  const handleLogout = () => {
    setIslogin(false);
    setTogglelogout(false);
  };

  const [isPopup, setIsPopup] = useState(false);

  const handleToggleIsPopup = () => {
    setIsPopup(!isPopup);
  };

  useEffect(() => {
    isPopup
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isPopup]);

  return (
    <>
      <div className="bg-teal-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <Link to={"/"}>
            <img
              className="hover:cursor-pointer"
              src={assets.logo}
              alt="Logo"
            />
          </Link>
          {!isLogin ? (
            <div className="flex items-center gap-2.5">
              <Link
                to={"/pricing"}
                className="cursor-pointer p-2 text-neutral-600 hover:underline"
              >
                Pricing
              </Link>
              <button
                className="rounded-full bg-black px-14 py-2.5 text-white"
                onClick={handleToggleIsPopup}
              >
                Login
              </button>
            </div>
          ) : (
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
          )}
        </div>
      </div>
      <div
        className={`absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-black/70 backdrop-blur-sm ${!isPopup && "hidden"} `}
      >
        <div
          onClick={handleToggleIsPopup}
          className={`h-screen w-full ${!isPopup && "hidden"} `}
        ></div>
        <div className="absolute w-96 rounded-2xl bg-white p-6">
          <div className="ml-auto w-fit">
            <img
              onClick={handleToggleIsPopup}
              className="hover:cursor-pointer"
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <div className="p-3">
            <h1 className="text-center text-[28px] font-medium text-neutral-700">
              Login
            </h1>
            <p className="mt-2 text-center text-neutral-600">
              Welcome back! Please sign in to continue
            </p>
            <div className="py-8">
              <div className="flex gap-4 rounded-full border-2 px-4 py-2">
                <img src={assets.email_icon} alt="" />
                <input
                  className="focus:outline-none"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div className="mt-4 flex gap-4 rounded-full border-2 px-4 py-2">
                <img src={assets.lock_icon} alt="" />
                <input
                  className="focus:outline-none"
                  placeholder="Enter your Password"
                  type="password"
                />
              </div>
            </div>
            <Link className="text-sm text-blue-600">Forgot Password?</Link>
            <button
              onClick={() => {
                handleToggleIsPopup();
                setIslogin(true);
              }}
              className="mt-2 w-full rounded-full bg-blue-600 py-3 text-white"
            >
              Login
            </button>
            <p className="mt-2 text-center text-sm text-neutral-400">
              Don’t have an account?
              <span className="text-blue-600 underline">Sign up</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
