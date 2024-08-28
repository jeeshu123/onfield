import { useEffect, useState } from "react";
import ScoreList from "./ScoreList";

export default function Scores() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    async function fetchScores() {
      const res = await fetch(
        "https://v3.football.api-sports.io/fixtures?&season=2024&league=203",
        // "https://v3.football.api-sports.io/fixtures?live=all&season=2024&league=203",
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": "6d5e8a2097fc50558c88434bf8d0fd29",
            "x-rapidapi-host": "v3.football.api-sports.io",
          },
        }
      );
      const data = await res.json();
      console.log(data)
      setScores(data.response);
    }
    fetchScores();
  }, []);
  
  return (
    <>
      <div className="flex justify-between px-12 py-3 mt-6 text-sm md:text-base">
        <div className="flex gap-3">
          <div>
            {/* {league && league} */}
          </div>
          {/* <div>Today</div> */}
        </div>
        <div>All Scores</div>
      </div>
      <ScoreList scores={scores}/>
    </>
  );
}
