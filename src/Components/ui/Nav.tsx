'"use client";';
import { getUserInfo, removeUserInfo } from "@/service/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

import avatar from "../../assests/avatar.png";
import Image from "next/image";
import { authKey } from "@/constrain/storagekey";

const Navbar = () => {
  const router = useRouter();

  // const role = USER_ROLE.ADMIN;
  const { name } = getUserInfo() as any;

  //  logout function
  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  return (
    <header>
      {/* Top Header */}
      <div className="bg-[#1d1d1d] text-[#e4e4e4] p-10">
        <div className="lg:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-4 gap-2">
          <div className="flex items-center justify-center lg:justify-start">
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
                d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                strokeWidth="0"
              />
            </svg>
            <p>Dhnamondi 8/A, Dhaka - 1205.</p>
          </div>

          <div className="flex items-center justify-center lg:justify-start">
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
            <p>01716 00 99 88</p>
          </div>

          <div></div>

          <div className="flex items-center justify-center lg:justify-start">
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
                d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 2.66a1 1 0 0 0 -.993 .883l-.007 .117v5l.009 .131a1 1 0 0 0 .197 .477l.087 .1l3 3l.094 .082a1 1 0 0 0 1.226 0l.094 -.083l.083 -.094a1 1 0 0 0 0 -1.226l-.083 -.094l-2.707 -2.708v-4.585l-.007 -.117a1 1 0 0 0 -.993 -.883z"
                strokeWidth="0"
              />
            </svg>
            <p>Opening : Mon-Fri 11:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>

      <hr className="border-[1.5px] border-[#4e4e4e]" />
      {/* Navbar */}
      <div className="bg-[#1d1d1d] text-[#e4e4e4] p-10">
        <div className="lg:w-2/3 mx-auto grid grid-cols-2">
          <div>
            <Link href="/home" className="text-[#e3ba7c] text-3xl font-medium">
              HOUSEDECO
            </Link>
          </div>

          <div className="uppercase justify-around hidden lg:flex lg:items-center">
            <Link href="/" className="hover:text-[#dbb479] duration-300">
              Home
            </Link>
            <Link href="/" className="hover:text-[#dbb479] duration-300">
              About Us
            </Link>
            <Link href="/" className="hover:text-[#dbb479] duration-300">
              Service
            </Link>
            {/* <Link href="/home" className="hover:text-[#dbb479] duration-300">
              Pages
            </Link> */}
            <Link
              href="/#contact"
              className="hover:text-[#dbb479] duration-300"
            >
              Contact Us
            </Link>

            {name ? (
              <>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <Image src={avatar} alt="user image"></Image>
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black"
                  >
                    <li>
                      <a className="justify-between">{name}</a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a onClick={logOut}>Logout</a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link href="/login">
                  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-sm">
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>

          <div className="lg:hidden flex items-center">
            <div className="drawer drawer-end">
              <input
                id="nav-drawer"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content w-max justify-self-end">
                {/* Page content here */}
                <label htmlFor="nav-drawer" className="drawer-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-[#e4bb7d] fill-[#e4bb7d] mr-2"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                  </svg>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="nav-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <div className="w-72 min-h-full bg-[#1d1d1d] text-[#e4e4e4] uppercase menu p-10 pt-40 text-2xl text-right gap-10">
                  <Link
                    href="/home"
                    className="hover:text-[#dbb479] duration-300"
                  >
                    Home
                  </Link>
                  <Link
                    href="/home"
                    className="hover:text-[#dbb479] duration-300"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/home"
                    className="hover:text-[#dbb479] duration-300"
                  >
                    Service
                  </Link>
                  <Link
                    href="/home"
                    className="hover:text-[#dbb479] duration-300"
                  >
                    Pages
                  </Link>
                  <Link
                    href="/home"
                    className="hover:text-[#dbb479] duration-300"
                  >
                    Contuct Us
                  </Link>
                  <Link href="/login">
                    <button className="btn  btn-sm ">Login</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
