import { useState, useEffect, useRef } from "react";

const sportData = [
  { name: "Super Lig", id: 203, category: "Football" },
  { name: "Premier League", id: 39, category: "Football" },
  { name: "La Liga", id: 140, category: "Football" },
  { name: "Bundesliga", id: 78, category: "Football" },
  { name: "Formula 1", id: 78, category: "Formula1" },
];

export default function SportsDropdown() {
  const [selectedSport, setSelectedSport] = useState(null);
  const [sportDetails, setSportDetails] = useState(null);

  useEffect(() => {
    if (selectedSport) {
      // Fetch data based on the selected sport's category and id
      fetchSportData(selectedSport);
    }
  }, [selectedSport]);

  const fetchSportData = async (sport) => {
    try {
      let url = "";
      // Decide the API endpoint based on the sport category
      if (sport.category === "Football") {
        url = `https://sportsplus-server.vercel.app/api/football/league/${sport.id}`;
      } else if (sport.category === "Formula1") {
        url = `https://sportsplus-server.vercel.app/api/formula1/season/${sport.id}`;
      }
      // Add more sport categories and respective URLs in the future (e.g., MMA, Basketball)

      const res = await fetch(url);
      const data = await res.json();
      setSportDetails(data);
    } catch (error) {
      console.error("Error fetching sport data:", error);
    }
  };

  return (
    <div className="w-48">
      <Dropdown
        options={sportData}
        onSelect={(sport) => setSelectedSport(sport)}
      />
      {/* {sportDetails && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Sport Details:</h3>
          <pre>{JSON.stringify(sportDetails, null, 2)}</pre>
        </div>
      )} */}
    </div>
  );
}

export function Dropdown({ options, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-48" ref={dropdownRef}>
      <button
        className="w-full p-2 flex justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption.name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 ${isOpen ? "rotate-180" : ""} duration-300`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute w-full bg-stone-700 rounded-md shadow-md z-50">
          {options.map(
            (option, index) =>
              option.name !== selectedOption.name && (
                <li
                  key={index}
                  className="p-2 cursor-pointer hover:bg-stone-600"
                  onClick={() => handleSelect(option)}
                >
                  {option.name}
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
}
