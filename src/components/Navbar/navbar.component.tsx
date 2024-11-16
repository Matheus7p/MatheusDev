import { FaMoon } from "react-icons/fa6";
import { Language } from "../Language/Language.component";
import styles from "./navbar.module.css";

import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
  className={`${
    scrolled ? "bg-black/10 backdrop-blur-md transition-all duration-300 ease-in-out" : ""
  } p-4 h-20 fixed w-full flex justify-between items-center`}
>
  <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
    <div>
      <img className="h-10 w-10" src="./logo.png"/>
    </div>

    <div className="flex justify-between items-center gap-4">
      <Language />
      <button
        aria-label="Alternar modo noturno"
        className="rounded-full bg-white/20 p-2 transition-all duration-300 ease-in-out hover:bg-white/60 hover:backdrop-blur-md flex items-center justify-center w-10 h-10"
      >
        <FaMoon className="text-white" />
      </button>
    </div>
  </div>
</nav>
  );
}
