import { useSportsContext } from "../context/SportsContext";
import { getShortDate, shortHandTitle } from "../helpers/helper";

export default function RaceList() {
  const { isLoading, data } = useSportsContext();

  return (
    <div className="flex overflow-x-scroll gap-4 h-32 mt-4 bg-slate-100 py-4 px-6 md:px-12 relative">
      {isLoading && <span className="loader"></span>}
      {data.response &&
        data.response.map((raceItem) => <RaceItem race={raceItem} />)}
    </div>
  );
}

function RaceItem({ race }) {
  const name = shortHandTitle(race.competition.name);
  const formattedDate = getShortDate(race.date);
  return (
    <div className="text-xs md:text-sm min-w-44 bg-slate-200 py-2 px-1 rounded-md">
      <p className="font-medium">
        {race.status === "Completed" || "Cancelled"
          ? race.status
          : formattedDate}
      </p>
      <div className="flex justify-between">
        <p>{name}</p>
        <img className="w-6 h-4" src={race.flag} alt={name} />
      </div>
      {/* <p className="text-[10px]">{race.circuit.name}</p> */}
      <p>{race.laps.total} Laps</p>
    </div>
  );
}
