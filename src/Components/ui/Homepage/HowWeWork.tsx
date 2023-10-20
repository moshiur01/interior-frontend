"use client";
import Image from "next/image";
import Link from "next/link";

const HowWeWork = () => {
  return (
    <>
      <section
        className={`my-10 lg:my-16 bg-cover bg-center bg-[url('/top-section-bg.jpg')]`}
      >
        <div className="bg-[#0000007F] h-full p-10 lg:px-0 py-28">
          <div className="lg:w-2/3 mx-auto">
            <h2 className="text-2xl font-medium text-[#e5bd81] lg:mt-10 mb-5">
              GETTING IT RIGHT
            </h2>
            <h1 className="text-5xl font-medium mb-8 text-white">
              RELENTLES PURSUIT
              <hr className="border-transparent my-1" />
              OF PERFECTION
            </h1>
            <Link href="/#contact">
              <button className="btn rounded-none px-5 bg-[#e4bb7d] border-[#e4bb7d] text-white">
                CONTACT NOW
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="p-10 my-10 lg:my-16">
        <div className="lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div>
              <h2 className="text-2xl font-medium text-[#e5bd81] lg:mt-10 mb-5">
                HOW DO WE WORK ?
              </h2>
              <h1 className="text-5xl font-medium mb-8">
                WE DESIGN FOR YOUR SATISFACTION
              </h1>
              <p className="text-[#8c8c8c]">
                We prioritize your contentment in every project we undertake.
                Our approach encompasses a range of design services tailored to
                meet your unique needs and preferences.
              </p>
            </div>
            <div className="mt-10">
              <div className="flex items-center gap-10 py-5 border-y border-gray-100">
                <div>
                  <h1 className="text-5xl font-medium text-[#e5bd81]">01</h1>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">CONCEPT</h2>
                  <p className="text-[#8c8c8c]">
                    Our design journey begins with a thorough exploration of
                    your ideas and needs.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-10 py-5 border-y border-gray-100">
                <div>
                  <h1 className="text-5xl font-medium text-[#e5bd81]">02</h1>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">DESIGN</h2>
                  <p className="text-[#8c8c8c]">
                    Once the concept is established, our expert team transitions
                    into the design phase.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-10 py-5 border-y border-gray-100">
                <div>
                  <h1 className="text-5xl font-medium text-[#e5bd81]">03</h1>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">DEVELOPMENT</h2>
                  <p className="text-[#8c8c8c]">
                    With the design in place, we move on to the development
                    stage, where we bring your project to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="relative rounded-lg lg:-mb-20">
              <Image
                src="/section-6-1.jpg"
                width={0}
                height={0}
                sizes="100vw"
                alt=""
                className="w-full object-cover shadow-lg rounded-t-lg mb-28"
              />
              <div className="bg-white bg-opacity-75 rounded-lg p-5 absolute bottom-2 shadow-lg">
                <h2 className="text-2xl font-medium text-center text-[#e5bd81] mb-1">
                  RESIDENTIAL
                </h2>
                <p className="text-[#8c8c8c] text-center">
                  We create living spaces that are not only visually pleasing
                  but also highly functional, reflecting your unique style and
                  needs.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg">
              <Image
                src="/section-6-2.jpg"
                width={0}
                height={0}
                sizes="100vw"
                alt=""
                className="w-full object-cover shadow-lg rounded-t-lg mb-28"
              />
              <div className="bg-white bg-opacity-75 rounded-lg p-5 absolute bottom-2 shadow-lg">
                <h2 className="text-2xl font-medium text-center text-[#e5bd81] mb-1">
                  RESTURANT
                </h2>
                <p className="text-[#8c8c8c] text-center">
                  Our expertise extends to crafting restaurant spaces that
                  enchant and impress.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg lg:-mb-20">
              <Image
                src="/section-6-3.jpg"
                width={0}
                height={0}
                sizes="100vw"
                alt=""
                className="w-full object-cover shadow-lg rounded-t-lg mb-28"
              />
              <div className="bg-white bg-opacity-75 rounded-lg p-5 absolute bottom-2 shadow-lg">
                <h2 className="text-2xl font-medium text-center text-[#e5bd81] mb-1">
                  CORPORATE
                </h2>
                <p className="text-[#8c8c8c] text-center">
                  For the corporate world, we design spaces that boost
                  productivity and employee satisfaction.
                </p>
              </div>
            </div>
            <div className="relative rounded-lg">
              <Image
                src="/section-6-4.jpg"
                width={0}
                height={0}
                sizes="100vw"
                alt=""
                className="w-full object-cover shadow-lg rounded-t-lg mb-28"
              />
              <div className="bg-white bg-opacity-75 rounded-lg p-5 absolute bottom-2 shadow-lg">
                <h2 className="text-2xl font-medium text-center text-[#e5bd81] mb-1">
                  COMMERCIAL
                </h2>
                <p className="text-[#8c8c8c] text-center">
                  In the commercial sector, we provide solutions that enhance
                  customer experience, resulting in greater business success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWeWork;
