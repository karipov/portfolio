import { ReactNode } from "react";

import NavBar from "./NavBar";

interface LayoutProps {
  children: ReactNode;
}

export default function ({ children }: LayoutProps) {
  return (
    <div className="bg-white min-h-screen max-w-4xl mx-auto p-5">
      <header>
        <NavBar />
      </header>
      <main className="pt-5">{children}</main>
      <footer>{/* TODO */}</footer>
    </div>
  );
}
