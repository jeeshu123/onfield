import ScoreList from "./ScoreList";
// import DropDown from "../components/DropDown";
import { useSportsContext } from "../context/SportsContext";
// import { filterScores } from "../helpers/helper";

import RaceList from "./RaceList";
import { Dropdown } from "../components/SportsDropDown";
import { useState } from "react";

export default function Scores() {
  const { selectedData, userFavourite } = useSportsContext();
  const [selectedSport, setSelectedSport] = useState();

  return (
    <>
      <div className="flex justify-between items-center px-4 sm:px-12 py-3 mt-6 text-sm md:text-base">
        {/* <DropDown content={userFavourite} /> */}
        <Dropdown
          options={userFavourite}
          onSelect={(sport) => setSelectedSport(sport)}
        />
        <div>2024</div>
      </div>
      {selectedData.category === "Football" && <ScoreList />}
      {selectedData.category === "Formula1" && <RaceList />}
    </>
  );
}
