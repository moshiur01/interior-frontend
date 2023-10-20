/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";

const UserReview = () => {
  return (
    <section className="p-10 my-10 lg:my-16 relative">
      <div className="bg-[#f3f3f3] h-[30vh] top-0 left-0 right-0 absolute -z-10"></div>
      <div className="lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div>
            <h2 className="text-xl font-medium text-[#e5bd81] lg:mt-10 mb-5">
              OUR TESTIMONIAL
            </h2>
            <h1 className="text-5xl font-medium mb-5">WHAT OUR CLIENT SAY?</h1>
            <p className="text-[#8c8c8c]">
              We take immense pride in our work and are delighted to have served
              a diverse clientele. Here's what some of our clients have to say
              about their experiences working with us
            </p>
          </div>
          <div className="mt-8 lg:p-8 bg-white grid grid-cols-5 items-center gap-5">
            <div className="col-span-3">
              <p className="text-[#8c8c8c]">
                &quot; Exceptional interior design! Our space has been
                transformed into a work of art, and we couldn't be happier.
                &quot;
              </p>
              <hr className="border-[1.5px] my-5 w-1/4 border-[#e4bb7d]" />
              <h2 className="text-xl font-medium text-[#8c8c8c]">
                Sabana Khan
              </h2>
              {/* <p className="text-[#8c8c8c]">DESIGNATION</p> */}
            </div>
            <div className="col-span-2">
              <Image
                src="/person-1.jpg"
                width={0}
                height={0}
                sizes="100vw"
                alt=""
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-8 lg:p-8 bg-white grid grid-cols-5 items-center gap-5">
            <div className="col-span-3">
              <p className="text-[#8c8c8c]">
                &quot;Highly recommend this interior design service. They nailed
                our vision, creating a stylish and functional dream space.&quot;
              </p>
              <hr className="border-[1.5px] my-5 w-1/4 border-[#e4bb7d]" />
              <h2 className="text-xl font-medium text-[#8c8c8c]">
                Bapparaz Ali
              </h2>
              {/* <p className="text-[#8c8c8c]">DESIGNATION</p> */}
            </div>
            <div className="col-span-2">
              <Image
                src="/person-2.jpg"
                width={0}
                height={0}
                sizes="100vw"
                alt=""
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-16 lg:mt-0">
            <h2 className="text-xl font-medium lg:mt-10">OUR PARTNER</h2>
            <div className="grid grid-cols-3 gap-5 items-center">
              <Image
                src="/partner-1.png"
                width={0}
                height={0}
                sizes="100vw"
                alt=""
                className="w-full"
              />
              <Image
                src="/partner-2.png"
                width={0}
                height={0}
                sizes="100vw"
                alt=""
                className="w-full"
              />
              <Image
                src="/partner-3.png"
                width={0}
                height={0}
                sizes="100vw"
                alt=""
                className="w-full"
              />
            </div>
            {/* <p className="text-[#8c8c8c]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserReview;
