import Achievement from "@/components/halaman_utama/Achievement";
import Navbar from "@/components/halaman_utama/Navbar";
import Image from "next/image";
import {ButtonProps} from "@/components/ui/Button"
import CallToAction from "@/components/halaman_utama/CallToAction";
import InterestingWisata from "@/components/halaman_utama/InterestingWisata";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <CallToAction/>
      <Achievement/>
      <InterestingWisata/>
    </>
  );
}
