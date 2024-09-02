import { useEffect, useState } from "react";
import ScoreItem from "./ScoreItem";

export default function ScoreList({ scores }) {
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
  // console.log(scores);

  return (
    <div className="flex overflow-x-scroll gap-9 mt-4 bg-slate-100 py-4 px-6 md:px-12">
      {scores &&
        scores.map(
          (scoreItem) =>
            scoreItem.fixture.status.short !== "TBD" && (
              <ScoreItem scoreItem={scoreItem} />
            )
        )}
    </div>
  );
}
