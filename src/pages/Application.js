import DateWeather from "../ui/DateWeather";
import Header from "../ui/Header";
import Navbar from "../ui/NavBar";
import Scores from "../ui/Scores";
import Breaking from "../ui/Breaking";
import Latest from "../ui/Latest";
import CTA from "../ui/CTA";
import Footer from "../ui/Footer";

export default function Application() {
  return (
    <>
      <DateWeather />
      <Header />
      <Navbar />
      <Scores />
      <Breaking />
      <Latest />
      <CTA />
      <Footer />
    </>
  );
}
