export default function Tile({ formData, toggleSportSelection }) {
  const sportsList = [
    "Football",
    "Basketball",
    "Tennis",
    "Cricket",
    "Baseball",
    "Rugby",
    "Hockey",
    "Volleyball",
    "Golf",
  ];

  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium mb-2" onClick={toggleSportSelection}>
        Select Your Preferred Sports
      </h3>
      <div className="grid grid-cols-3 gap-2">
        {sportsList.map((sport) => {
          const isSelected = formData.preferredSports.some(
            (item) => item.sport === sport
          );

          return (
            <div
              key={sport}
              onClick={() => toggleSportSelection(sport)}
              className={`cursor-pointer p-2 text-center border rounded-md ${
                isSelected ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
              }`}
            >
              {sport}
            </div>
          );
        })}
      </div>
    </div>
  );
}
