import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import GlobalNetwork from "@/components/home/GlobalNetwork";
import TeamInvestor from "@/components/home/TeamInvestor";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <WhyChooseUs />
      <TeamInvestor />
      <GlobalNetwork />
    </main>
  );
}
