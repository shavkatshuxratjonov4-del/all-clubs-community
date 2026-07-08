import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="select-none leading-none"
    >
      <h1 className="text-3xl font-black tracking-tight text-white">
        All Clubs
      </h1>

      <p className="mt-1 text-3xl font-black tracking-tight text-white">
        Community
      </p>
    </Link>
  );
}