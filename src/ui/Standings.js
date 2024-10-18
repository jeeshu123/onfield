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

export default function Standings() {
  const {
    userFavourite,
    fetchFootballStandings,
    fetchFormula1Standings,
    standingsData,
  } = useSportsContext();

  const [selectedSport, setSelectedSport] = useState(userFavourite.at(0));
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (selectedSport.category === "Football") {
      setColumns([
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
      ]);
      fetchFootballStandings(selectedSport);
    }
    if (selectedSport.category === "Formula1") {
      setColumns(["Pos", "Driver", "Team", "Wins", "Points"]);
      fetchFormula1Standings(selectedSport);
    }
    if (selectedSport.category === "MMA") {
      setColumns(["Pos", "Fighter", "Wins", "Losses", "Draws"]);
      // fetchMMAStandings(selectedSport);
    }
  }, [selectedSport]);

  return (
    <div className="">
      <Dropdown
        options={userFavourite}
        onSelect={(sport) => setSelectedSport(sport)}
      />
      <div className="overflow-x-scroll">
        <table
          className="mx-auto"
          style={{ borderSpacing: "20px 10px", borderCollapse: "separate" }}
        >
          <Columns columns={columns} />
          {selectedSport.category === "Football" && (
            <FootBallStandings standingsData={standingsData} />
          )}
          {selectedSport.category === "Formula1" && (
            <Formula1Standings standingsData={standingsData} />
          )}
        </table>
      </div>
    </div>
  );
}

function FootballTeam({ standing }) {
  // console.log(standing);
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

function Columns({ columns }) {
  return (
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
  );
}

function FootBallStandings({ standingsData }) {
  const validData = standingsData && standingsData.standings;
  return (
    <tbody>
      {validData &&
        standingsData.standings.map((standing) => (
          <FootballTeam standing={standing} key={standing.rank} />
        ))}
    </tbody>
  );
}

function Formula1Standings({ standingsData }) {
  const validData = standingsData && standingsData.response;

  return (
    <tbody>
      {/* <tr>
        <td>Drivers</td>
        <td>Constructors</td>
      </tr> */}
      {validData &&
        standingsData.response.map((standing) => (
          <Formula1Driver standing={standing} key={standing.rank} />
        ))}
    </tbody>
  );
}

function Formula1Driver({ standing }) {
  console.log(standing);
  return (
    <tr className="text-xs md:text-sm">
      <td className="text-center">{standing.position}</td>
      <td className="flex items-center gap-2">
        <img
          src={standing.driver.image}
          alt={standing.driver.abbr}
          className="h-8 w-8 bg-slate-800 rounded-full"
        />{" "}
        {standing.driver.name}
      </td>
      <td className="text-left">{standing.team.name}</td>
      <td className="text-center">{standing.wins}</td>
      <td className="text-center font-semibold">{standing.points || 0}</td>
    </tr>
  );
}
