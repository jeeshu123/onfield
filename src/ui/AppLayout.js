import { Outlet } from "react-router-dom";
import DateWeather from "./DateWeather";
import Header from "./Header";
import Navbar from "./NavBar";

export default function AppLayout() {
  return (
    <>
      <DateWeather />
      <Header />
      <Navbar />
      <Outlet />
    </>
  );
}
