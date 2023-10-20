import Image from "next/image";

const Statics = () => {
  return (
    <section className="p-10 my-10 lg:my-16">
      <div className="lg:w-2/3 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-24 pt-16">
          <div>
            <div>
              <h2 className="text-2xl font-medium text-[#e5bd81] lg:mt-10 mb-5">
                OUR STATISTIC
              </h2>
              <h1 className="text-5xl font-medium mb-8">
                MAKE YOUR STATEMENT IN STYLE
              </h1>
              <p className="text-[#8c8c8c]">
                At Our Statistic, we believe in transcending the ordinary and
                creating statements in every corner of your environment. Our
                mission is to infuse style and functionality seamlessly, making
                every space a reflection of your unique taste and needs.
              </p>
            </div>
            <div className="mt-10">
              <div className="mt-8">
                <h1 className="text-xl font-semibold mb-3">PROJECT ANALYSIS</h1>
                <div className="flex">
                  <div className="h-1 w-[75%] bg-[#e4bb7d]"></div>
                  <div className="h-1 w-[25%] bg-[#1d1d1d]"></div>
                </div>
              </div>
              <div className="mt-8">
                <h1 className="text-xl font-semibold mb-3">PROJECT DESIGN</h1>
                <div className="flex">
                  <div className="h-1 w-[80%] bg-[#e4bb7d]"></div>
                  <div className="h-1 w-[20%] bg-[#1d1d1d]"></div>
                </div>
              </div>
              <div className="mt-8">
                <h1 className="text-xl font-semibold mb-3">
                  PRODUCTION & BUILDING
                </h1>
                <div className="flex">
                  <div className="h-1 w-[85%] bg-[#e4bb7d]"></div>
                  <div className="h-1 w-[15%] bg-[#1d1d1d]"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/section-4.jpg"
              width={0}
              height={0}
              sizes="100vw"
              alt=""
              className="shadow-lg w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block"></div>
          <div className="bg-white shadow-xl grid grid-cols-2 p-5">
            <div className="text-center">
              <h1 className="text-7xl text-[#e4bb7d] font-bold">2</h1>
              <h1 className="text-lg text-[#848484] font-semibold mb-3">
                YEARS OF EXPERIENCE
              </h1>
            </div>
            <div className="text-center">
              <h1 className="text-7xl text-[#e4bb7d] font-bold">81</h1>
              <h1 className="text-lg text-[#848484] font-semibold mb-3">
                PROJECTS COMPLETED
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statics;
