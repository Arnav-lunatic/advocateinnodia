import { Outlet } from "react-router";
import { NavBar } from "./components/NavBar";
import { TopBar } from "./components/TopBar";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "flowbite-react";

const globalTheme = createTheme({
  navbar: {
    "root": {
      "base": "bg-zinc-900 px-2 py-2.5 sm:px-4",
    },
    "link": {
      "base": "block py-2 pl-3 pr-4 md:p-0 transition-all duration-300",
      "active": {
        "on": "bg-white text-zinc-900 md:bg-transparent md:text-white font-bold md:border-b-2 md:border-white",
        "off": "border-b border-gray-100 text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-white "
      },
    }
  },
  button: {
    "base": "border-2 bg-white font-bold px-4 py-2 rounded-md transition-all duration-300 cursor-pointer",
    color: {
      "navButton": "hidden md:block bg-transparent text-white border-white hover:bg-white hover:text-zinc-900",
    },
  },
});

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
    <ThemeProvider theme={globalTheme}>

      <TopBar email="jasvirsingh488@gmail.com" phone="+91-9627829808" />
      <NavBar />
      {showNavBar && <NavBar classname="top-0 fixed right-0 left-0" />}
      <div className="max-w-[1600px] mx-auto px-4">
        <Outlet />

      </div>
    </ThemeProvider>
  );
}