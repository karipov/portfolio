import React from "react";
import NavBar from "./NavBar";

export default function Feed({ children }: React.PropsWithChildren) {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className="min-h-screen max-w-4xl mx-auto p-5">
        <header className="mb-10">
          <NavBar />
        </header>
        <main>{children}</main>
        <footer>{/* TODO */}</footer>
      </div>
    </div>
  );
}
