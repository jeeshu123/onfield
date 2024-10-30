// import { Outlet } from "react-router-dom";
// import DateWeather from "./DateWeather";
// import Header from "./Header";
// import Navbar from "./NavBar";

// export default function AppLayout() {
//   return (
//     <>
//       <DateWeather />
//       <Header />
//       <Navbar />
//       <Outlet />
//     </>
//   );
// }

import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import DateWeather from "./DateWeather";
import Header from "./Header";
import Navbar from "./NavBar";
import { FaChevronUp } from "react-icons/fa";

export default function AppLayout() {
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();
  const currentUrl = location.pathname;
  console.log(currentUrl);
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <DateWeather />
      <Header />
      {!currentUrl.includes("/app/user/") && (
        <>
          <Navbar />
        </>
      )}
      <Outlet />

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed flex items-center gap-2 bottom-5 right-5 bg-green-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-900 transition"
        >
          <FaChevronUp />
          Top
        </button>
      )}
    </>
  );
}
