import Link from "next/link";
import { useState } from "react";

// const burgerSvg;

export default function NavBar() {
  const [menu, setMenu] = useState(false);

  const links = [
    {
      name: "/HOME",
      href: "/",
      new_page: false,
    },
    {
      name: "/COURSES",
      href: "https://karipov.notion.site/38c744b89f774658aacd8b9bb4345762?v=43fe5ca27a8e44bebc160fbc60355baf",
      new_page: true,
    },
    {
      name: "/RESUME",
      href: "resume/resume.pdf",
      new_page: true,
    },
  ];

  return (
    <div
      className={`w-full flex ${
        menu ? "flex-col sm:flex-row" : "flex-row"
      } space-x-5 justify-end uppercase font-mono`}
    >
      <p className="grow">Komron Aripov</p>

      {links.map((link, index) => (
        <div
          key={index}
          className={`text-center hover:text-gray-600 dark:hover:text-gray-300 ${
            menu ? "" : "hidden sm:flex"
          }`}
        >
          <Link href={link.href}>
            <a target={link.new_page ? "_blank" : ""}>{link.name}</a>
          </Link>
        </div>
      ))}

      {/* menu button */}
      <button onClick={() => setMenu(!menu)} className="sm:hidden self-center">
        {menu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          "MENU"
        )}
      </button>
    </div>
  );
}
