import { assets, plans } from "./assets/assets";

export default function Pricing() {
  return (
    <main className="flex-grow py-24">
      <div className="text-center">
        <button className="rounded-full border px-9 py-2 text-neutral-600">
          OUR PLANS
        </button>
      </div>
      <h1 className="mt-12 text-center text-[35px] font-medium text-neutral-800">
        Choose the plan
      </h1>
      <div className="mt-10 flex justify-center gap-8">
        {plans.map((e, i) => {
          return (
            <div
              key={i}
              className="w-[333px] rounded-lg border px-12 pb-11 pt-16"
            >
              <img src={assets.logo_icon} alt="" />
              <h1 className="mt-5 text-xl font-medium text-neutral-600">
                {e.id}
              </h1>
              <p className="mt-1 text-neutral-600">{e.desc}</p>
              <div className="mt-7">
                <span className="text-4xl font-medium">${e.price} </span>
                <span className="text-neutral-600">/{e.credits}</span>
              </div>
              <div className="mt-14 text-center">
                <button className="rounded-md bg-neutral-800 px-16 py-2 text-white">
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
