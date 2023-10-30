import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import TeamInvestor from "@/components/home/TeamInvestor";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <WhyChooseUs />
      <TeamInvestor />
    </main>
  );
}
