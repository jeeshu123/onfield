import ScoreList from "./ScoreList";
import { useSportsContext } from "../context/SportsContext";

import RaceList from "./RaceList";
import { Dropdown } from "../components/SportsDropDown";
import { useEffect, useState } from "react";

export default function Scores() {
  const {
    selectedData,
    userFavourite,
    fetchFootballFixtures,
    fetchFormula1Fixtures,
  } = useSportsContext();
  const [selectedSport, setSelectedSport] = useState(userFavourite.at(0));

  useEffect(() => {
    if (selectedSport.category === "Football") {
      fetchFootballFixtures(selectedSport);
    }
    if (selectedSport.category === "Formula1") {
      fetchFormula1Fixtures(selectedSport);
    }
  }, [selectedSport]);

  return (
    <>
      <div className="flex justify-between items-center px-4 sm:px-12 py-3 mt-6 text-sm md:text-base">
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
