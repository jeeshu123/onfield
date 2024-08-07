import Breaking from "./ui/Breaking";
import CTA from "./ui/CTA";
import DateWeather from "./ui/DateWeather";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Latest from "./ui/Latest";
import Navbar from "./ui/NavBar";
import Scores from "./ui/Scores";

export default function App() {
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
