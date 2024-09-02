import ScoreList from "./ScoreList";
import DropDown from "../components/DropDown";
import { useSportsContext } from "../context/SportsContext";

export default function Scores() {
  const { data } = useSportsContext();

  const { userFavourite } = useSportsContext();

  // console.log(userFavourite);
  return (
    <>
      <div className="flex justify-between items-center px-12 py-3 mt-6 text-sm md:text-base">
        <div className="flex gap-3 items-center">
          <DropDown content={userFavourite} />
          <div>Today</div>
        </div>
        <div>All Scores</div>
      </div>
      <ScoreList scores={data} />
    </>
  );
}
