import { useState } from "react";
import { useSportsContext } from "../context/SportsContext";

export default function DropDown({ content }) {
  const [isOpen, setIsOpen] = useState(false);
  const [favourites, setFavourites] = useState(content);
  const { getData, updateSelectedData } = useSportsContext();

  const handleChange = (index) => {
    const selected = favourites.at(index);
    const newFavourites = [...favourites];

    const temp = newFavourites[0];
    newFavourites[0] = newFavourites[index];
    newFavourites[index] = temp;

    setFavourites(newFavourites);
    setIsOpen(false);
    getData(selected);
    updateSelectedData(selected);
  };

  return (
    <div className="w-40 relative">
      <div
        className="flex justify-between cursor-pointer duration-300"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        aria-expanded={isOpen}
      >
        <p>{favourites.at(0).name}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 ${
            isOpen ? "rotate-180" : ""
          } duration-300 ease-in-out`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <div
        className={`${
          isOpen ? "absolute h-auto" : "hidden"
        } duration-300 bg-slate-400 w-40 rounded-md z-10`}
      >
        <ul className="py-2 px-2 flex flex-col gap-2">
          {favourites.map(
            (favourite, index) =>
              index !== 0 && (
                <li
                  className="cursor-pointer"
                  key={index}
                  onClick={() => handleChange(index)}
                >
                  {favourite.name}
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
}
