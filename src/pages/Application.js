import DateWeather from "../ui/DateWeather";
import Header from "../ui/Header";
import Navbar from "../ui/NavBar";
import Scores from "../ui/Scores";
import Breaking from "../ui/Breaking";
import Latest from "../ui/Latest";
import CTA from "../ui/CTA";
import Footer from "../ui/Footer";
import { Outlet } from "react-router-dom";

export default function Application() {
  return (
    <>
      {/* <DateWeather />
      <Header />
      <Navbar /> */}
      <Scores />
      <Breaking />
      {/* <Outlet /> */}
      <Latest />
      <CTA />
      <Footer />
    </>
  );
}
