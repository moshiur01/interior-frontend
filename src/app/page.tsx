import Banner from "@/Components/ui/Homepage/Banner";
import ContactUs from "@/Components/ui/Homepage/ContactUs";
import HowWeWork from "@/Components/ui/Homepage/HowWeWork";
import Projects from "@/Components/ui/Homepage/Projects";
import Services from "@/Components/ui/Homepage/Services";
import Statics from "@/Components/ui/Homepage/Statics";
import UserReview from "@/Components/ui/Homepage/UserReview";
import WellComePage from "@/Components/ui/Homepage/WellComePage";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <WellComePage />
      <Statics />
      <Services />
      <Projects />
      <HowWeWork />
      <UserReview />
      <ContactUs />
    </>
  );
}
