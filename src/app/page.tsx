import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/Home/HeroSection";
import CardsSection from "@/components/Home/CardsSection";
import Parallax from "@/components/Home/Parallax";
import TestimonialsSection from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="min-h-screen">
          <HeroSection/>
          <CardsSection/>
          <Parallax/>
          <TestimonialsSection/>
      </main>
      <Footer/>
    </>
  );
}
