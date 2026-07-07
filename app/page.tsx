import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Statistics from "@/components/home/Statistics";
import Clubs from "@/components/home/Clubs";
import Events from "@/components/home/Events";
import News from "@/components/home/News";
import Partners from "@/components/home/Partners";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Statistics />
      <Clubs />
      <Events />
      <News />
      <Partners />
    </main>
  );
}