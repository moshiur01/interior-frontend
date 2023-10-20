"use client";
import Link from "next/link";

const Services = () => {
  return (
    <section className="my-10 lg:py-16 lg:my-16 relative">
      <div className="bg-[#f3f3f3] w-[60vw] top-0 bottom-0 right-0 absolute -z-10"></div>
      <div className="p-10 lg:p-0 lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-black border text-white border-gray-100 shadow-sm px-5 py-10 flex flex-col justify-center items-center rounded-md text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-[#e4bb7d]"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 21h9" />
              <path d="M10 21l-7 -8l8.5 -5.5" />
              <path d="M13 14c-2.148 -2.148 -2.148 -5.852 0 -8c2.088 -2.088 5.842 -1.972 8 0l-8 8z" />
              <path d="M11.742 7.574l-1.156 -1.156a2 2 0 0 1 2.828 -2.829l1.144 1.144" />
              <path d="M15.5 12l.208 .274a2.527 2.527 0 0 0 3.556 0c.939 -.933 .98 -2.42 .122 -3.4l-.366 -.369" />
            </svg>
            <h2 className="text-xl font-medium my-3">INTERIOR DESIGN</h2>
            <p>Our interior design service goes beyond mere aesthetics.</p>
          </div>
          <div className="bg-white border border-gray-100 shadow-sm px-5 py-10 flex flex-col justify-center items-center rounded-md text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-[#e4bb7d]"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
              <path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5" />
              <path d="M6 19v2" />
              <path d="M18 19v2" />
            </svg>
            <h2 className="text-xl font-medium my-3">OFFICE REDESIGN</h2>
            <p>
              We understand the importance of a well-designed office environment
              in fostering productivity and creativity.
            </p>
          </div>
          <div className="bg-white border border-gray-100 shadow-sm px-5 py-10 flex flex-col justify-center items-center rounded-md text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-[#e4bb7d]"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
            <h2 className="text-xl font-medium my-3">INTERIOR DECORATION</h2>
            <p>
              Our team excels in adding exquisite touches that make your space
              truly exceptional.
            </p>
          </div>
          <div className="bg-white border border-gray-100 shadow-sm px-5 py-10 flex flex-col justify-center items-center rounded-md text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-[#e4bb7d]"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 9a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M5.75 15a8.015 8.015 0 1 0 9.25 -13" />
              <path d="M11 17v4" />
              <path d="M7 21h8" />
            </svg>
            <h2 className="text-xl font-medium my-3">FURNITURE PRODUCTION</h2>
            <p> We also take pride in crafting custom furniture.</p>
          </div>
        </div>
        <div className="p-6 lg:p-10 lg:h-4/5 rounded-md">
          <h2 className="text-xl font-medium text-[#e5bd81] lg:mt-10 mb-5">
            OUR SERVICES
          </h2>
          <h1 className="text-5xl font-medium mb-8">
            WE DESIGN MODREN AND ELEGANT
          </h1>
          <p className="text-[#8c8c8c]">
            We are dedicated to redefining the world of interior design and
            decoration with a touch of modern elegance. Our range of services
            caters to various aspects of your living or working space, ensuring
            that each project is a unique masterpiece.
          </p>
          <Link href="/services">
            <button className="btn btn-neutral rounded-none mt-5 px-8 bg-black text-white hover:bg-[#e4bb7d] duration-300 hover:text-black">
              Explore Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
