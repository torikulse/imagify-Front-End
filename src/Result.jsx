import { assets } from "./assets/assets";

export default function Result() {
  return (
    <main className="flex-grow flex justify-center bg-teal-50">
      <div className="mt-auto  py-14">
        <div className="mx-auto w-fit">
          <img
            className="border-b-4 border-blue-600 w-80 "
            src={assets.sample_img_1}
            alt=""
          />
          <span className="text-sm text-neutral-600">Loading...</span>
        </div>
        <div className="bg-neutral-600 rounded-full ps-8 py-1 pe-1 flex gap-2 w-fit mx-auto mt-6 items-center">
          <input
            className="bg-transparent focus:outline-none text-white w-80 placeholder:text-white text-sm"
            type="text"
            placeholder="Describe what you want to generate"
          />
          <button className="py-2.5 px-14 bg-black text-white rounded-full">
            Generate
          </button>
        </div>
      </div>
    </main>
  );
}
