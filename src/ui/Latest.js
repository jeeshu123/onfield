import Standings from "./Standings";

export default function Latest() {
  return (
    <div className="px-6 mt-24 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] ">
        <div>
          <p className="italic font-bold text-2xl">Latest News</p>
        </div>
        <div>
          <p className="italic font-bold text-2xl">Standings</p>
          <Standings />
        </div>
      </div>
    </div>
  );
}
