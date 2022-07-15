import Link from "next/link";

export default function () {
  return (
    <div className="w-full flex space-x-5 justify-end uppercase font-mono">
      <p className="grow">Komron Aripov</p>
      <div>
        <Link href="/">
          <a>/home</a>
        </Link>
      </div>
      <div>
        <Link href="/courses">
          <a>/courses</a>
        </Link>
      </div>
    </div>
  );
}
