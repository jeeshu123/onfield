import { useEffect, useState } from "react";
import ScoreItem from "./ScoreItem";

const initialScores = [
  {
    homeTeam: "Chelsea",
    homeShortName: "CHE",
    awayTeam: "Arsenal",
    awayShortName: "ARS",
    homeScore: 3,
    awayScore: 1,
  },
  {
    homeTeam: "Fulham",
    homeShortName: "FUL",
    awayTeam: "Everton",
    awayShortName: "EVE",
    homeScore: 1,
    awayScore: 2,
  },
  {
    homeTeam: "Liverpool",
    homeShortName: "LIV",
    awayTeam: "Leicester City",
    awayShortName: "LEI",
    homeScore: 2,
    awayScore: 1,
  },
  {
    homeTeam: "Tottenham Hotspur",
    homeShortName: "TOT",
    awayTeam: "Bournemouth",
    awayShortName: "BOU",
    homeScore: 2,
    awayScore: 0,
  },
  {
    homeTeam: "Brentford",
    homeShortName: "BRE",
    awayTeam: "Crystal Palace",
    awayShortName: "CRY",
    homeScore: 1,
    awayScore: 2,
  },
  {
    homeTeam: "Nottingham Forest",
    homeShortName: "NFO",
    awayTeam: "Manchester United",
    awayShortName: "MUN",
    homeScore: 1,
    awayScore: 3,
  },
  {
    homeTeam: "Manchester City",
    homeShortName: "MCI",
    awayTeam: "West Ham United",
    awayShortName: "WHU",
    homeScore: 4,
    awayScore: 2,
  },
  {
    homeTeam: "Brighton & Hove Albion",
    homeShortName: "BHA",
    awayTeam: "Aston Villa",
    awayShortName: "AVL",
    homeScore: 0,
    awayScore: 3,
  },
  {
    homeTeam: "Southampton",
    homeShortName: "SOU",
    awayTeam: "Newcastle United",
    awayShortName: "NEW",
    homeScore: 1,
    awayScore: 2,
  },
  {
    homeTeam: "Wolverhampton Wanderers",
    homeShortName: "WOL",
    awayTeam: "Leeds United",
    awayShortName: "LEE",
    homeScore: 2,
    awayScore: 2,
  },
  {
    homeTeam: "Burnley",
    homeShortName: "BUR",
    awayTeam: "Sheffield United",
    awayShortName: "SHU",
    homeScore: 1,
    awayScore: 0,
  },
  {
    homeTeam: "Norwich City",
    homeShortName: "NOR",
    awayTeam: "Watford",
    awayShortName: "WAT",
    homeScore: 2,
    awayScore: 1,
  },
  {
    homeTeam: "West Bromwich Albion",
    homeShortName: "WBA",
    awayTeam: "Middlesbrough",
    awayShortName: "MID",
    homeScore: 0,
    awayScore: 1,
  },
  {
    homeTeam: "Cardiff City",
    homeShortName: "CAR",
    awayTeam: "Stoke City",
    awayShortName: "STO",
    homeScore: 3,
    awayScore: 2,
  },
];

export default function ScoreList() {
  const [scores, setScores] = useState(initialScores);

  useEffect(() => {
    async function fetchScores() {
      const res = await fetch(
        "https://widgets.api-sports.io/2.0.3/widgets.js",
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": "ddc2b363c651bf75c1bbffea0ac0b6af",
            "x-rapidapi-host": "v3.football.api-sports.io",
          },
        }
      );
      const data = await res.json();
      console.log(data);
      setScores(data);
    }
    // fetchScores();
  }, []);

  return (
    <div className="flex overflow-x-scroll gap-9 mt-4 bg-slate-100 py-2 px-6 md:px-12">
      {scores && scores.map((scoreItem) => <ScoreItem scoreItem={scoreItem} />)}
    </div>
  );
}
