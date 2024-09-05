// import { useSportsContext } from "../context/SportsContext";
// import { getShortDate, shortHandTitle } from "../helpers/helper";

// export default function RaceList() {
//   const { isLoading, data } = useSportsContext();

//   return (
//     <div className="flex overflow-x-scroll gap-4 h-32 mt-4 bg-slate-100 py-4 px-6 md:px-12 relative">
//       {isLoading && <span className="loader"></span>}
//       {data.response &&
//         data.response.map((raceItem) => <RaceItem race={raceItem} />)}
//     </div>
//   );
// }

// function RaceItem({ race }) {
//   const name = shortHandTitle(race.competition.name);
//   const formattedDate = getShortDate(race.date);
//   return (
//     <div className="text-xs md:text-sm min-w-44 bg-slate-200 py-2 px-1 rounded-md">
//       <p className="font-medium">
//         {race.status === "Completed" || "Cancelled"
//           ? race.status
//           : formattedDate}
//       </p>
//       <div className="flex justify-between">
//         <p>{name}</p>
//         <img className="w-6 h-4" src={race.flag} alt={name} />
//       </div>
//       {/* <p className="text-[10px]">{race.circuit.name}</p> */}
//       <p>{race.laps.total} Laps</p>
//     </div>
//   );
// }

import { useState } from "react";
import { useSportsContext } from "../context/SportsContext";
import { getShortDate, shortHandTitle } from "../helpers/helper";

export default function RaceList() {
  const { isLoading, data } = useSportsContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRace, setSelectedRace] = useState(null);

  const openModal = (race) => {
    setSelectedRace(race);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRace(null);
  };

  return (
    <div className="relative">
      <div className="flex overflow-x-scroll gap-4 h-32 mt-4 bg-slate-100 py-4 px-6 md:px-12 relative">
        {isLoading && <span className="loader"></span>}
        {data.response &&
          data.response.map((raceItem) => (
            <RaceItem key={raceItem.id} race={raceItem} onClick={openModal} />
          ))}
      </div>

      {isModalOpen && <RaceModal race={selectedRace} onClose={closeModal} />}
    </div>
  );
}

function RaceItem({ race, onClick }) {
  const name = shortHandTitle(race.competition.name);
  const formattedDate = getShortDate(race.date);

  return (
    <div
      className="text-xs md:text-sm min-w-44 bg-slate-200 py-2 px-1 rounded-md cursor-pointer"
      onClick={() => onClick(race)}
    >
      <p className="font-medium">
        {race.status === "Completed" || race.status === "Cancelled"
          ? race.status
          : formattedDate}
      </p>
      <div className="flex justify-between">
        <p>{name}</p>
        <img className="w-6 h-4" src={race.flag} alt={name} />
      </div>
      <p>{race.laps.total} Laps</p>
    </div>
  );
}

function RaceModal({ race, onClose }) {
  if (!race) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <button onClick={onClose} className="float-right text-xl">
          &times;
        </button>
        <h2 className="text-lg font-semibold mb-4">{race.competition.name}</h2>
        <p>
          <strong>Date:</strong> {getShortDate(race.date)}
        </p>
        <p>
          <strong>Circuit:</strong> {race.circuit.name}
        </p>
        <p>
          <strong>Laps:</strong> {race.laps.total}
        </p>
        <p>
          <strong>Status:</strong> {race.status}
        </p>
        <div className="mt-4">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
