import { Link } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import image from "../assets/LP.png";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";

export default function HomePage() {
  return (
    <div className="relative py-6">
      {/* <Header primaryColor="text-green-600" secondaryColor="text-green-200" /> */}
      <NavBar />
      <HeroSection />
      <Features />
      <Footer />
      {/* <div></div> */}
      {/* <img
        src={image}
        className="absolute top-0 brightness-[.2] w-full -z-10 h-3/6"
      /> */}
    </div>
  );
}
