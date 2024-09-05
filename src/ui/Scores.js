import ScoreList from "./ScoreList";
import DropDown from "../components/DropDown";
import { useSportsContext } from "../context/SportsContext";
// import { filterScores } from "../helpers/helper";
import RaceList from "./RaceList";

export default function Scores() {
  const { selectedData, userFavourite } = useSportsContext();

  return (
    <>
      <div className="flex justify-between items-center px-4 sm:px-12 py-3 mt-6 text-sm md:text-base">
        <DropDown content={userFavourite} />
        <div>2024</div>
      </div>
      {selectedData.category === "Football" && <ScoreList />}
      {selectedData.category === "Formula1" && <RaceList />}
    </>
  );
}
