export default function Header() {
  return (
    <div className="flex items-center justify-between px-6 py-3 md:px-12 md:my-6">
      <p className="font-extrabold italic text-xl sm:text-3xl md:text-4xl">
        <span className="text-green-800">Sports</span>Plus
      </p>
      <div className="flex items-center gap-3 text-xs md:text-base md:gap-6">
        <p className="flex items-center gap-2">
          <span>
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
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </span>
          Subscribe
        </p>
        <p className="bg-green-800 text-green-200 px-4 py-2 rounded-full font-semibold">
          Login
        </p>
      </div>
    </div>
  );
}
