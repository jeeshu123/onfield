import { useSportsContext } from "../context/SportsContext";

export default function RaceList() {
  const { isLoading, data } = useSportsContext();

  return (
    <div className="flex overflow-x-scroll gap-9 h-32 mt-4 bg-slate-100 py-4 px-6 md:px-12 relative">
      {isLoading && <span className="loader"></span>}
      {data.response &&
        data.response.map((raceItem) => <RaceItem race={raceItem} />)}
    </div>
  );
}

function RaceItem({ race }) {
  return <div className="text-xs w-96">{race.competition.name}</div>;
}
