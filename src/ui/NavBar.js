export default function Navbar() {
  return (
    <div className="flex items-center justify-between flex-wrap px-4 text-sm md:text-base md:px-12">
      <div className="block sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <nav className="hidden sm:block">
        <ul className="flex items-center gap-6">
          <li>
            <a href="#id">Home</a>
          </li>
          <li>
            <a href="#id">Sports</a>
          </li>
          <li>
            <a href="#id">Score</a>
          </li>
          <li>
            <a href="#id">Watch</a>
          </li>
          <li>
            <a href="#id">Odds</a>
          </li>
          <li>
            <a href="#id">Stories</a>
          </li>
          <li>
            <a href="#id">Podcasts</a>
          </li>
        </ul>
      </nav>
      <input
        type="text"
        placeholder="Search..."
        className="bg-slate-300 rounded-full px-3 py-1 text-slate-90000"
      />
    </div>
  );
}
