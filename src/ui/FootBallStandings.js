import { useEffect, useState } from "react";

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
  const [standings, setStandings] = useState();

  useEffect(() => {
    async function fetchStandings() {
      const res = await fetch(
        `https://sportsplus-server.vercel.app/api/football/standings`
      );
      const data = await res.json();
      setStandings(data);
    }
    fetchStandings();
  }, []);
  return (
    <div className="flex flex-col gap-2 overflow-x-scroll">
      <table
        className=""
        style={{ borderSpacing: "20px 10px", borderCollapse: "separate" }}
      >
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                className={`${index === 1 ? "min-w-40 text-center" : ""}`}
                key={index}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {standings &&
            standings.standings.map((standing) => (
              <Team standing={standing} key={standing.rank} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

function Team({ standing }) {
  return (
    <tr className="text-xs md:text-base">
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
