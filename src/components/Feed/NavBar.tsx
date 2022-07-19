import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full flex space-x-5 justify-end uppercase font-mono">
      <p className="grow">Komron Aripov</p>
      <Link href="/">
        <a>/home</a>
      </Link>
      <Link href="/courses">
        <a>/courses</a>
      </Link>
      <a href="">/resume</a>
    </div>
  );
}
