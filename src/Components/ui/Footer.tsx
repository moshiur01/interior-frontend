"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#1d1d1d] text-[#e4e4e4] p-10">
      <div className="lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          Copyright 2023 © Housedeco | Powered by Team Void
        </div>
        <div className="flex justify-around lg:justify-end items-center">
          <Link href="https://fb.com" className="text-[#e3ba7c] lg:mr-5">
            Facebook
          </Link>
          <Link href="https://instagram.com" className="text-[#e3ba7c] lg:mr-5">
            Instagram
          </Link>
          <Link
            href="https://pinterest.com"
            className="text-[#e3ba7c] lg:mr-10"
          >
            Pinterest
          </Link>
          <button
            className="btn btn-circle bg-transparent border-transparent"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-[#a5a5a5]"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 5l0 14" />
              <path d="M18 11l-6 -6" />
              <path d="M6 11l6 -6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
