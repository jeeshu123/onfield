import { useEffect, useState } from "react";
// import DropDown from "../components/DropDown";
import { useSportsContext } from "../context/SportsContext";
import SportsDropdown, { Dropdown } from "../components/SportsDropDown";

const columns = [
  "Pos",
  "Team",
  "MP",
  "W",
  "D",
  "L",
  "GF",
  "GA",
  "GD",
  "Points",
];

export default function FootBallStandings() {
  const { userFavourite, fetchFootballStandings, standingsData } =
    useSportsContext();

  const [selectedSport, setSelectedSport] = useState({});

  useEffect(() => {
    fetchFootballStandings(selectedSport);
  }, [selectedSport]);

  return (
    <div className="">
      <Dropdown
        options={userFavourite}
        onSelect={(sport) => setSelectedSport(sport)}
      />
      <div className="overflow-x-scroll">
        <table
          className=""
          style={{ borderSpacing: "20px 10px", borderCollapse: "separate" }}
        >
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  className={`${index === 1 ? "min-w-44 text-center" : ""}`}
                  key={index}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {standingsData &&
              standingsData.standings.map((standing) => (
                <Team standing={standing} key={standing.rank} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Team({ standing }) {
  return (
    <tr className="text-xs md:text-sm">
      <td>{standing.rank}</td>
      <td className="flex items-center gap-2">
        <img
          src={standing.team.logo}
          alt={standing.team.name}
          className="h-6 w-6"
        />{" "}
        {standing.team.name}
      </td>
      <td className="text-center">{standing.all.played}</td>
      <td className="text-center">{standing.all.win}</td>
      <td className="text-center">{standing.all.draw}</td>
      <td className="text-center">{standing.all.lose}</td>
      <td className="text-center">{standing.all.goals.for}</td>
      <td className="text-center">{standing.all.goals.against}</td>
      <td className="text-center">{standing.goalsDiff}</td>
      <td className="text-center font-semibold">{standing.points}</td>
    </tr>
  );
}
