import { assets, plans } from "./assets/assets";

export default function Pricing() {
  return (
    <main className="flex-grow py-24">
      <div className=" text-center">
        <button className="py-2 px-9 border rounded-full text-neutral-600">
          OUR PLANS
        </button>
      </div>
      <h1 className="mt-12 text-[35px] font-medium text-center text-neutral-800">
        Choose the plan
      </h1>
      <div className="flex gap-8 justify-center mt-10">
        {plans.map((e, i) => {
          return (
            <div
              key={i}
              className="border rounded-lg pt-16 pb-11 px-12 w-[333px]"
            >
              <img src={assets.logo_icon} alt="" />
              <h1 className="text-xl font-medium text-neutral-600 mt-5">{e.id}</h1>
              <p className="text-neutral-600 mt-1">{e.desc}</p>
              <div className="mt-7">
                <span className="text-4xl font-medium">${e.price} </span>
                <span className="text-neutral-600">/{e.credits}</span>
              </div>
              <div className="text-center mt-14">
                <button className="bg-neutral-800 rounded-md text-white px-16 py-2">
                  Get Start
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
