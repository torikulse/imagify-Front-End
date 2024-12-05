import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <footer className=" container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="pe-8 border-r-2">
            <img src={assets.logo} alt="logo" />
          </div>
          <div className="ps-8 text-neutral-600">All right reserved. Copyright @imagify</div>
        </div>
        <div className="flex gap-2 items-center">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.instagram_icon} alt="" />
        </div>
      </div>
    </footer>
  );
}
