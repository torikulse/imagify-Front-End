import { assets, stepsData, testimonialsData } from "./assets/assets";

export default function Home() {
  return (
    <main className="flex-grow bg-gradient-to-b from-teal-50 to-white">
      <div className="pt-12 ">
        <section className="py-10">
          <div className="px-8 py-3 flex items-center gap-2 rounded-full bg-white border-[0.3px] w-max border-neutral-500 mx-auto">
            <p className="text-neutral-600">Best text to image generator</p>
            <img src={assets.star_icon} alt="star icon" />
          </div>
          <p className="text-[80px] w-[660px] mx-auto text-center leading-none mt-10">
            Turn text to <span className="text-blue-500">image</span>, in
            seconds.
          </p>
          <p className="w-[576px] text-center mx-auto mt-5 text-neutral-600 text-lg">
            Unleash your creativity with AI. Turn your imagination into visual
            art in seconds – just type, and watch the magic happen.
          </p>
          <button className="flex bg-black items-center gap-2 py-4 px-8 rounded-full mx-auto mt-9">
            <span className="text-white">Generate Images</span>
            <img className="w-8" src={assets.star_group} alt="star" />
          </button>
        </section>
        <section className="py-10">
          <div className="flex gap-4 justify-center ">
            <img
              src={assets.sample_img_1}
              className="w-20 rounded-lg"
              alt="sample image"
            />
            <img
              src={assets.sample_img_2}
              className="w-20 rounded-lg"
              alt="sample image"
            />
            <img
              src={assets.sample_img_1}
              className="w-20 rounded-lg"
              alt="sample image"
            />
            <img
              src={assets.sample_img_2}
              className="w-20 rounded-lg"
              alt="sample image"
            />
          </div>
          <p className="text-neutral-600 py-2 text-center">
            Generated images from imagify
          </p>
        </section>
        <section className="py-14">
          <h1 className="text-center font-medium text-[40px]">How it works</h1>
          <p className="text-center text-neutral-600 mb-9">
            Transform Words Into Stunning Images
          </p>
          <div className="max-w-[800px] mx-auto flex flex-col gap-5">
            {stepsData.map((e, i) => {
              return (
                <div
                  key={i}
                  className="flex gap-4 p-6 rounded-md bg-white/20 shadow border"
                >
                  <img src={e.icon} alt="icon" />
                  <div>
                    <h1>{e.title}</h1>
                    <p>{e.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="py-14">
          <h1 className="text-[40px] font-medium text-center">
            Create AI Images
          </h1>
          <p className="text-center text-neutral-600">
            Turn your imagination into visuals
          </p>
          <div className="max-w-[990px] flex gap-10 mx-auto items-center mt-16">
            <img className="max-w-96" src={assets.sample_img_1} alt="" />
            <div>
              <h1 className="font-medium text-[28px]">
                Introducing the AI-Powered Text to Image Generator
              </h1>
              <p className="mt-4 text-neutral-600">
                Easily bring your ideas to life with our free AI image
                generator. Whether you need stunning visuals or unique imagery,
                our tool transforms your text into eye-catching images with just
                a few clicks. Imagine it, describe it, and watch it come to life
                instantly.
              </p>
              <p className="mt-4 text-neutral-600">
                Simply type in a text prompt, and our cutting-edge AI will
                generate high-quality images in seconds. From product visuals to
                character designs and portraits, even concepts that don’t yet
                exist can be visualized effortlessly. Powered by advanced AI
                technology, the creative possibilities are limitless!
              </p>
            </div>
          </div>
        </section>
        <section className="py-14">
          <h1 className="text-[40px] font-medium text-center">
            Customer testimonials
          </h1>
          <p className="text-neutral-600 text-center">
            What Our Users Are Saying
          </p>
          <div className="flex gap-7 mt-10 justify-center">
            {testimonialsData.map((e, i) => {
              return (
                <div
                  key={i}
                  className="w-[322px] border bg-white/20 py-8 px-6 text-center"
                >
                  <img className="mx-auto" src={e.image} alt="" />
                  <div className="mt-4">
                    <h1 className="text-lg font-medium text-zinc-700">
                      {e.name}
                    </h1>
                    <p className="mt-1 text-sm text-zinc-500 font-medium">
                      {e.role}
                    </p>
                  </div>
                  <div className="flex gap-1 mx-auto w-fit mt-3">
                    {Array(e.stars)
                      .fill(null)
                      .map((_, index) => (
                        <img key={index} src={assets.rating_star} alt="" />
                      ))}
                  </div>
                  <p className="text-neutral-600 mt-5">{e.text}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="py-14">
          <h1 className="text-[40px] font-medium text-center">
            See the magic. Try now
          </h1>
          <button className="flex bg-black items-center gap-2 py-4 px-8 rounded-full mx-auto mt-9">
            <span className="text-white">Generate Images</span>
            <img className="w-8" src={assets.star_group} alt="star" />
          </button>
        </section>
      </div>
    </main>
  );
}
