export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-extrabold tracking-wide text-white">
            All Clubs Community
          </h1>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-10 text-gray-300 md:flex">
          <a href="#" className="transition hover:text-white">
            Home
          </a>

          <a href="#clubs" className="transition hover:text-white">
            Clubs
          </a>

          <a href="#events" className="transition hover:text-white">
            Events
          </a>

          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <select className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-white outline-none transition hover:border-blue-500">
            <option>🇺🇿 UZ</option>
            <option>🇬🇧 EN</option>
            <option>🇷🇺 RU</option>
          </select>

          <button className="rounded-xl bg-white px-6 py-2 font-semibold text-black transition hover:scale-105 hover:bg-gray-200">
            Sign In
          </button>

        </div>

      </div>
    </nav>
  );
}