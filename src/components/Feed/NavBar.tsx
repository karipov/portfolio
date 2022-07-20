import Link from "next/link";
import { useState } from "react";

// const burgerSvg;

export default function NavBar() {
  const [menu, setMenu] = useState(false);

  return (
    <div
      className={`w-full flex ${
        menu ? "flex-col sm:flex-row" : "flex-row"
      } space-x-5 justify-end uppercase font-mono`}
    >
      <p className="grow">Komron Aripov</p>

      {/* hamburger button */}
      <button onClick={() => setMenu(!menu)} className="sm:hidden">
        {menu ? "CLOSE" : "MENU"}
      </button>

      <div className={menu ? "" : "hidden sm:flex"}>
        <Link href="/">
          <a>/home</a>
        </Link>
      </div>
      <div className={menu ? "" : "hidden sm:flex"}>
        <Link href="/courses">
          <a>/courses</a>
        </Link>
      </div>
      <div className="hidden sm:flex">
        <a href="">/resume</a>
      </div>
    </div>
  );
}
