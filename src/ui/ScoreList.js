import { useEffect, useState } from "react";
import ScoreItem from "./ScoreItem";

// const initialScores = [
//   {
//     homeTeam: "Chelsea",
//     homeShortName: "CHE",
//     awayTeam: "Arsenal",
//     awayShortName: "ARS",
//     homeScore: 3,
//     awayScore: 1,
//   },
//   {
//     homeTeam: "Fulham",
//     homeShortName: "FUL",
//     awayTeam: "Everton",
//     awayShortName: "EVE",
//     homeScore: 1,
//     awayScore: 2,
//   },
//   {
//     homeTeam: "Liverpool",
//     homeShortName: "LIV",
//     awayTeam: "Leicester City",
//     awayShortName: "LEI",
//     homeScore: 2,
//     awayScore: 1,
//   },
//   {
//     homeTeam: "Tottenham Hotspur",
//     homeShortName: "TOT",
//     awayTeam: "Bournemouth",
//     awayShortName: "BOU",
//     homeScore: 2,
//     awayScore: 0,
//   },
//   {
//     homeTeam: "Brentford",
//     homeShortName: "BRE",
//     awayTeam: "Crystal Palace",
//     awayShortName: "CRY",
//     homeScore: 1,
//     awayScore: 2,
//   },
//   {
//     homeTeam: "Nottingham Forest",
//     homeShortName: "NFO",
//     awayTeam: "Manchester United",
//     awayShortName: "MUN",
//     homeScore: 1,
//     awayScore: 3,
//   },
//   {
//     homeTeam: "Manchester City",
//     homeShortName: "MCI",
//     awayTeam: "West Ham United",
//     awayShortName: "WHU",
//     homeScore: 4,
//     awayScore: 2,
//   },
//   {
//     homeTeam: "Brighton & Hove Albion",
//     homeShortName: "BHA",
//     awayTeam: "Aston Villa",
//     awayShortName: "AVL",
//     homeScore: 0,
//     awayScore: 3,
//   },
//   {
//     homeTeam: "Southampton",
//     homeShortName: "SOU",
//     awayTeam: "Newcastle United",
//     awayShortName: "NEW",
//     homeScore: 1,
//     awayScore: 2,
//   },
//   {
//     homeTeam: "Wolverhampton Wanderers",
//     homeShortName: "WOL",
//     awayTeam: "Leeds United",
//     awayShortName: "LEE",
//     homeScore: 2,
//     awayScore: 2,
//   },
//   {
//     homeTeam: "Burnley",
//     homeShortName: "BUR",
//     awayTeam: "Sheffield United",
//     awayShortName: "SHU",
//     homeScore: 1,
//     awayScore: 0,
//   },
//   {
//     homeTeam: "Norwich City",
//     homeShortName: "NOR",
//     awayTeam: "Watford",
//     awayShortName: "WAT",
//     homeScore: 2,
//     awayScore: 1,
//   },
//   {
//     homeTeam: "West Bromwich Albion",
//     homeShortName: "WBA",
//     awayTeam: "Middlesbrough",
//     awayShortName: "MID",
//     homeScore: 0,
//     awayScore: 1,
//   },
//   {
//     homeTeam: "Cardiff City",
//     homeShortName: "CAR",
//     awayTeam: "Stoke City",
//     awayShortName: "STO",
//     homeScore: 3,
//     awayScore: 2,
//   },
// ];

export default function ScoreList({scores}) {
  // const [scores, setScores] = useState([]);

  // useEffect(() => {
  //   async function fetchScores() {
  //     const res = await fetch(
  //       "https://v3.football.api-sports.io/fixtures?&season=2024&league=203",
  //       // "https://v3.football.api-sports.io/fixtures?live=all&season=2024&league=203",
  //       {
  //         method: "GET",
  //         headers: {
  //           "x-rapidapi-key": "6d5e8a2097fc50558c88434bf8d0fd29",
  //           "x-rapidapi-host": "v3.football.api-sports.io",
  //         },
  //       }
  //     );
  //     const data = await res.json();
  //     console.log(data)
  //     setScores(data.response);
  //   }
  //   fetchScores();
  // }, []);

    return (
    <div className="flex overflow-x-scroll gap-9 mt-4 bg-slate-100 py-4 px-6 md:px-12">
      {scores && scores.map((scoreItem) => scoreItem.fixture.status.short !== "TBD" &&<ScoreItem scoreItem={scoreItem} />)}
    </div>
  );
}
