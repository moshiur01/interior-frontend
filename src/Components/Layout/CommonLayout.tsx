"use client";
import dynamic from "next/dynamic";
import Navbar from "../ui/Nav";
import Footer from "../ui/Footer";

const CommonLayout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default dynamic(() => Promise.resolve(CommonLayout), { ssr: false });
