"use client";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="my-10 lg:my-16 grid grid-cols-1 lg:grid-cols-6"
    >
      <div></div>
      <div className="col-span-2 p-5 my-auto">
        <h2 className="text-xl font-medium text-[#e5bd81] lg:mt-10 mb-5 mr-8">
          CONTACT US
        </h2>
        <h1 className="text-5xl font-medium mb-5">HAVE A QUESTION ?</h1>
        <div className="grid grid-cols-2">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-[#e4bb7d] fill-[#e4bb7d] mr-2"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z"
                strokeWidth="0"
              />
            </svg>
            <p className="text-[#8c8c8c]">01716 00 99 88</p>
          </div>
          <div className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-[#e4bb7d] fill-[#e4bb7d] mr-2"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z"
                strokeWidth="0"
              />
              <path
                d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
                strokeWidth="0"
              />
            </svg>
            <p className="text-[#8c8c8c]">info@houseDeco.com</p>
          </div>
        </div>

        {/* <div className="mt-8">
          <Image
            src="/map.jpg"
            width={0}
            height={0}
            sizes="100vw"
            alt=""
            className="w-full rounded-lg shadow-lg"
          />
        </div> */}
      </div>
      <div className="bg-black px-5 py-16 col-span-2 mx-5 lg:mr-0 lg:ml-5">
        <p className="text-white font-medium uppercase mb-1">Name</p>
        <input
          type="text"
          placeholder="Your Name"
          className="input input-bordered w-full rounded"
        />
        <p className="text-white font-medium uppercase mt-8 mb-1">Email</p>
        <input
          type="text"
          placeholder="Your Email"
          className="input input-bordered w-full rounded"
        />
        <p className="text-white font-medium uppercase mt-8 mb-1">Subject</p>
        <input
          type="text"
          placeholder="Your Subject"
          className="input input-bordered w-full rounded"
        />
        <p className="text-white font-medium uppercase mt-8 mb-1">Message</p>
        <textarea
          className="textarea text-base textarea-bordered w-full rounded"
          rows={5}
          placeholder="Your Message"
        ></textarea>

        <button className="btn rounded px-16 mt-8 bg-[#e4bb7d] border-[#e4bb7d] text-white">
          SUBMIT
        </button>
      </div>
      <div className="bg-black"></div>
    </section>
  );
};

export default ContactUs;
