import { useSportsContext } from "../context/SportsContext";
import { filterScores } from "../helpers/helper";
import ScoreItem from "./ScoreItem";

export default function ScoreList() {
  const { isLoading, selectedData, data } = useSportsContext();

  const scores = filterScores(data);

  return (
    <div className="flex overflow-x-scroll gap-9 h-32 mt-4 bg-slate-100 py-4 px-6 md:px-12 relative">
      {isLoading && <span className="loader"></span>}
      {scores &&
        selectedData.category === "Football" &&
        scores.map(
          (scoreItem) => <ScoreItem scoreItem={scoreItem} />
          // scoreItem.fixture.status.short !== "TBD" && (
          //   <ScoreItem scoreItem={scoreItem} />
          // )
        )}
      {selectedData.category === "Formula1" && <p>Formula 1</p>}
    </div>
  );
}
