import { Link } from "react-router-dom";
import { assets, stepsData, testimonialsData } from "./assets/assets";

export default function Home() {
  return (
    <main className="flex-grow bg-gradient-to-b from-teal-50 to-white">
      <div className="pt-12">
        <section className="py-10">
          <div className="mx-auto flex w-max items-center gap-2 rounded-full border-[0.3px] border-neutral-500 bg-white px-8 py-3">
            <p className="text-neutral-600">Best text to image generator</p>
            <img src={assets.star_icon} alt="star icon" />
          </div>
          <p className="mx-auto mt-10 w-[660px] text-center text-[80px] leading-none">
            Turn text to <span className="text-blue-500">image</span>, in
            seconds.
          </p>
          <p className="mx-auto mt-5 w-[576px] text-center text-lg text-neutral-600">
            Unleash your creativity with AI. Turn your imagination into visual
            art in seconds – just type, and watch the magic happen.
          </p>
          <Link
            to={"/result"}
            className="mx-auto mt-9 flex w-fit items-center gap-2 rounded-full bg-black px-8 py-4"
          >
            <span className="text-white">Generate Images</span>
            <img className="w-8" src={assets.star_group} alt="star" />
          </Link>
        </section>
        <section className="py-10">
          <div className="flex justify-center gap-4">
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
          <p className="py-2 text-center text-neutral-600">
            Generated images from imagify
          </p>
        </section>
        <section className="py-14">
          <h1 className="text-center text-[40px] font-medium">How it works</h1>
          <p className="mb-9 text-center text-neutral-600">
            Transform Words Into Stunning Images
          </p>
          <div className="mx-auto flex max-w-[800px] flex-col gap-5">
            {stepsData.map((e, i) => {
              return (
                <div
                  key={i}
                  className="flex gap-4 rounded-md border bg-white/20 p-6 shadow"
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
          <h1 className="text-center text-[40px] font-medium">
            Create AI Images
          </h1>
          <p className="text-center text-neutral-600">
            Turn your imagination into visuals
          </p>
          <div className="mx-auto mt-16 flex max-w-[990px] items-center gap-10">
            <img className="max-w-96" src={assets.sample_img_1} alt="" />
            <div>
              <h1 className="text-[28px] font-medium">
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
          <h1 className="text-center text-[40px] font-medium">
            Customer testimonials
          </h1>
          <p className="text-center text-neutral-600">
            What Our Users Are Saying
          </p>
          <div className="mt-10 flex justify-center gap-7">
            {testimonialsData.map((e, i) => {
              return (
                <div
                  key={i}
                  className="w-[322px] border bg-white/20 px-6 py-8 text-center"
                >
                  <img className="mx-auto" src={e.image} alt="" />
                  <div className="mt-4">
                    <h1 className="text-lg font-medium text-zinc-700">
                      {e.name}
                    </h1>
                    <p className="mt-1 text-sm font-medium text-zinc-500">
                      {e.role}
                    </p>
                  </div>
                  <div className="mx-auto mt-3 flex w-fit gap-1">
                    {Array(e.stars)
                      .fill(null)
                      .map((_, index) => (
                        <img key={index} src={assets.rating_star} alt="" />
                      ))}
                  </div>
                  <p className="mt-5 text-neutral-600">{e.text}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="py-14">
          <h1 className="text-center text-[40px] font-medium">
            See the magic. Try now
          </h1>
          <Link
            to={"/result"}
            className="mx-auto mt-9 flex w-fit items-center gap-2 rounded-full bg-black px-8 py-4"
          >
            <span className="text-white">Generate Images</span>
            <img className="w-8" src={assets.star_group} alt="star" />
          </Link>
        </section>
      </div>
    </main>
  );
}
