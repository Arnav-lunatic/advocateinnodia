import { Outlet } from "react-router";
import { NavBar } from "./components/NavBar";
import { TopBar } from "./components/TopBar";
import { useEffect, useState } from "react";

export default function App() {
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShowNavBar(true);
      } else {
        setShowNavBar(false);
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <TopBar email="jasvirsingh488@gmail.com" phone="+91-9627829808" />
      <NavBar />
      {showNavBar && <NavBar classname="top-0 fixed right-0 left-0" />}
      <Outlet/>
    </div>
  );
}