import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-8 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* About */}
          <div>
            <h2 className="text-3xl font-black text-white">
              TDAU All Clubs
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Official student community platform of
              Tashkent State Agrarian University.
              Discover clubs, events and opportunities
              in one place.
            </p>

            <div className="mt-8 flex flex-col gap-2 text-gray-400">

              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-sky-400"
              >
                Telegram
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-pink-500"
              >
                Instagram
              </a>

              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-red-500"
              >
                YouTube
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3 text-gray-400">

              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/clubs" className="hover:text-white">
                  Clubs
                </Link>
              </li>

              <li>
                <Link href="/events" className="hover:text-white">
                  Events
                </Link>
              </li>

              <li>
                <Link href="/gallery" className="hover:text-white">
                  Gallery
                </Link>
              </li>

              <li>
                <Link href="/news" className="hover:text-white">
                  News
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Clubs */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Our Clubs
            </h3>

            <ul className="mt-6 space-y-3 text-gray-400">

              <li>Eco Club</li>

              <li>Travel Club</li>

              <li>Debate Club</li>

              <li>Movie Night</li>

              <li>Chill Club</li>

              <li>Media Club</li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-3 text-gray-400">

              <p>
                All Clubs Community
              </p>

              <p>
                community@tdau.uz
              </p>

              <a
                href="https://tdau.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300"
              >
                Visit Official Website
              </a>

            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-zinc-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">

            <p>
              © 2026 TDAU All Clubs Community
            </p>

            <p>
              Built with ❤️ by TDAU Students
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}