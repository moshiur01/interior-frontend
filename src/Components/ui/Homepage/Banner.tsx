import React from "react";

const Banner = () => {
  return (
    <section
      className={`h-screen bg-cover bg-center bg-[url('/top-section-bg.jpg')]`}
    >
      <div className="bg-[#0000007F] h-full flex flex-col items-center justify-center">
        <div className="w-max text-7xl text-white font-medium text-center">
          <h1 className="mb-7 text-[#e4bb7d] ">
            INNOVATE <br className="lg:hidden" />
            IDEAS
          </h1>
          <h1>
            FOR YOUR <br className="lg:hidden" />
            STYLE
          </h1>
        </div>
        <div className="mt-10 flex gap-10">
          <button className="btn btn-outline lg:btn-wide rounded-none border-white text-white">
            Our Project
          </button>
          <button className="btn btn-outline lg:btn-wide rounded-none btn-warning">
            Our Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
