import { assets } from "./assets/assets";

export default function Result() {
  return (
    <main className="flex flex-grow justify-center bg-teal-50">
      <div className="mt-auto py-14">
        <div className="mx-auto w-fit">
          <img
            className="w-80 border-b-4 border-blue-600"
            src={assets.sample_img_1}
            alt=""
          />
          <span className="text-sm text-neutral-600">Loading...</span>
        </div>
        <div className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full bg-neutral-600 py-1 pe-1 ps-8">
          <input
            className="w-80 bg-transparent text-sm text-white placeholder:text-white focus:outline-none"
            type="text"
            placeholder="Describe what you want to generate"
          />
          <button className="rounded-full bg-black px-14 py-2.5 text-white">
            Generate
          </button>
        </div>
      </div>
    </main>
  );
}
