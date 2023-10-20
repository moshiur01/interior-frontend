/* eslint-disable react/no-unescaped-entities */
'"use client";';
import Image from "next/image";
const WellComePage = () => {
  return (
    <>
      <section className="p-10 lg:my-16">
        <div className="lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
          <div>
            <h2 className="text-2xl font-medium text-[#e5bd81] mb-3">
              WELCOME TO HOUSEDECO
            </h2>
            <h1 className="text-5xl font-medium mb-3">INTERIOR DESIGN</h1>
            <p className="text-[#8c8c8c]">
              At HouseDeco, we specialize in innovative interior design
              solutions. Our team of experts is dedicated to creating spaces
              that not only meet your functional needs but also exude style and
              elegance.
            </p>

            <h2 className="text-2xl font-medium text-[#e5bd81] mt-10 mb-3">
              INNOVATIVE
            </h2>
            <p className="text-[#8c8c8c]">
              Our commitment to innovation sets us apart. We believe in pushing
              the boundaries of traditional interior design to bring you fresh,
              creative ideas that cater to your specific requirements. We're not
              just about following trends; we aim to set new ones.
            </p>

            <h2 className="text-2xl font-medium text-[#e5bd81] mt-10 mb-3">
              CREATIVE
            </h2>
            <p className="text-[#8c8c8c]">
              Creativity is at the core of our design philosophy. We believe
              that every space is unique, and our creative team is passionate
              about turning your vision into reality. With a keen eye for detail
              and a commitment to quality, we strive to create spaces that are
              not only aesthetically pleasing but also highly functional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <Image
              src="/section-2-1.jpg"
              width={0}
              height={0}
              sizes="100vw"
              alt=""
              className="shadow-lg w-full lg:w-3/4 lg:ml-16 lg:-mb-20"
            />
            <Image
              src="/section-2-2.jpg"
              width={0}
              height={0}
              sizes="100vw"
              alt=""
              className="shadow-lg w-full lg:w-3/4"
            />
            <Image
              src="/section-2-3.jpg"
              width={0}
              height={0}
              sizes="100vw"
              alt=""
              className="shadow-lg w-full lg:w-3/4 lg:ml-16 lg:-mb-20"
            />
            <Image
              src="/section-2-4.jpg"
              width={0}
              height={0}
              sizes="100vw"
              alt=""
              className="shadow-lg w-full lg:w-3/4"
            />
          </div>
        </div>
      </section>

      <section className="my-10 lg:py-16 lg:my-16 relative">
        <div className="bg-[#f3f3f3] w-[40vw] top-0 bottom-0 absolute -z-10"></div>
        <div className="p-10 lg:p-0 lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div>
            <Image
              src="/section-3.jpg"
              width={0}
              height={0}
              sizes="100vw"
              alt=""
              className="shadow-lg w-full"
            />
          </div>
          <div className="bg-white shadow-2xl p-6 lg:p-10 lg:h-4/5 rounded-md">
            <h2 className="text-2xl font-medium text-[#e5bd81] lg:mt-10 mb-5">
              WE GAVE THE BEST
            </h2>
            <h1 className="text-5xl font-medium mb-8">
              INNOVATIVE IDEAS STYLISH DESIGNS
            </h1>
            <p className="text-[#8c8c8c]">
              Innovation and style collide, reshaping our world. From
              cutting-edge tech to eco-conscious design, form and function
              unite. Today's wearables exemplify this fusion, doubling as chic
              accessories and powerful tools. Sustainable architecture, too,
              mirrors this trend, creating beauty in harmony with the
              environment. It's a stylish revolution.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WellComePage;
