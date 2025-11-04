"use client";

import { WobbleCard } from "../magicui/wobble-card";

export function WobbleCardDemo() {
  return (
    <section className="py-24 bg-linear-to-b from-green-300 to-neutral-200 dark:from-black/55 dark:to-neutral-900 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full px-6">

        {/* Card 1: Designer Connection */}
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-[#00b67f] min-h-[500px] lg:min-h-[300px] relative overflow-hidden rounded-2xl"
          className=""
        >
          <div className="max-w-md">
            <h2 className="text-left text-balance text-xl md:text-2xl lg:text-4xl font-semibold tracking-[-0.02em] text-white">
              Connect with passionate designers from around the world
            </h2>
            <p className="mt-4 text-left text-base text-green-50/90 leading-relaxed">
              Find creative minds who transform your fashion ideas into real,
              wearable art. Collaborate seamlessly and bring your vision to life.
            </p>
          </div>
          <img
            src="/img9.jpeg"
            width={500}
            height={500}
            alt="Designer Showcase"
            className="absolute -right-6 lg:-right-[19%] -bottom-65 object-contain rounded-2xl scale-90 opacity-90"
          />
        </WobbleCard>

        {/* Card 2: Upload Designs */}
        <WobbleCard
          containerClassName="col-span-1 bg-neutral-900 min-h-[450px] rounded-2xl relative overflow-hidden"
        >
          <h2 className="text-left text-balance text-xl md:text-2xl font-semibold text-white">
            Upload your designs with style
          </h2>
          <p className="mt-4 max-w-md text-left text-base text-neutral-300">
            Showcase your portfolio, share inspiration boards, and let clients
            discover your unique touch effortlessly.
          </p>
          <img
            src="/img12.jpg"
            width={200}
            // height={400}
            alt="Upload Interface"
            className="absolute -right-1 -bottom-10 object-contain rounded-xl opacity-90"
          />
        </WobbleCard>

        {/* Card 3: Collaboration Platform */}
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-r from-green-700 via-[#00b67f] to-emerald-500 min-h-[500px] lg:min-h-[400px] relative overflow-hidden rounded-2xl"
        >
          <div className="max-w-lg">
            <h2 className="text-left text-balance text-xl md:text-3xl lg:text-4xl font-semibold text-white">
              Collaborate, create, and grow — all in one platform
            </h2>
            <p className="mt-4 text-left text-base text-green-50/90">
              Manage design requests, feedback, and final delivery seamlessly.
              Sewna empowers both designers and clients with clarity and creativity.
            </p>
          </div>
          <img
            src="/img13.jpeg"
            width={400}
            height={400}
            alt="Collaboration Workspace"
            className="absolute -right-10 md:-right-[30%] lg:-right-[1%] -bottom-8 object-contain rounded-2xl opacity-90"
          />
        </WobbleCard>
      </div>
    </section>
  );
}
