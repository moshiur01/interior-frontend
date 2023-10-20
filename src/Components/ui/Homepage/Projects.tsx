/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section className="p-10 my-10 lg:my-16 lg:flex flex-col items-center">
      <div className="lg:w-2/3 mx-auto">
        <div>
          <h2 className="text-2xl font-medium text-[#e5bd81] lg:mt-10 mb-5">
            OUR PROJECT
          </h2>
          <h1 className="text-5xl font-medium mb-8">OUR LATEST PROJECT</h1>
          <p className="text-[#8c8c8c]">
            Our latest project showcases our commitment to excellence in design.
            With a keen eye for detail and a focus on innovation, we've
            transformed spaces into unique, functional works of art. Our
            approach combines aesthetics and practicality, ensuring that every
            project meets our clients' needs and elevates their quality of life.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-6 gap-10">
          <Image
            src="/section-6-1.jpg"
            width={0}
            height={0}
            sizes="100vw"
            alt=""
            className="lg:col-span-3 w-full h-full object-cover"
          />
          <Image
            src="/section-6-2.jpg"
            width={0}
            height={0}
            sizes="100vw"
            alt=""
            className="w-full h-full object-cover"
          />
          <Image
            src="/section-6-3.jpg"
            width={0}
            height={0}
            sizes="100vw"
            alt=""
            className="w-full h-full object-cover"
          />
          <Image
            src="/section-6-4.jpg"
            width={0}
            height={0}
            sizes="100vw"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <Link href="/projects">
        <div className="mt-6">
          <button className="btn border-black  btn-outline lg:btn-wide rounded-none btn-warning">
            Show More
          </button>
        </div>
      </Link>
    </section>
  );
};

export default Projects;
