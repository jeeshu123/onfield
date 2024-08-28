export default function CTA() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-green-950 py-3 px-3">
      <div className="px-3 py-6 grid grid-cols-1 gap-y-4 bg-green-100 md:w-9/12 lg:w-9/12 mx-auto lg:py-24 md:py-18 sm:py-12 rounded-xl md:grid-cols-2 ">
        <div className="flex flex-col gap-2 justify-center md:gap-4">
          {/* <span className="text-green-400">&larr;</span> */}
          <p className="text-xs font-semibold sm:text-sm md:text-2xl">
            Sign Up for the SportsPlus Daily News Letter
          </p>
          <p className="text-xs sm:text-sm md:text-base">
            Our biggest stories, delivered to your inbox everyday.
          </p>
          <p className="text-[10px] md:text-sm underline">
            See all news letters
          </p>
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <p className="font-semibold text-sm md:text-base">Your Email</p>
          <div className="flex flex-wrap gap-4 items-center">
            <input
              type="email"
              className="flex-grow max-w-full rounded-full px-2 py-1 bg-green-200 md:px-4 md:py-2"
              placeholder="Enter Your Email..."
            />
            <p className="flex-grow-0 flex-shrink-0 font-medium text-sm md:text-base">
              Submit
            </p>
          </div>
          <p className="text-xs text-gray-600 mt-2">
            By signing up, you agree to our
            <a href="/privacy-policy" className="text-blue-500 underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms-of-service" className="text-blue-500 underline">
              Terms of Service
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
