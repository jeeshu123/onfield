export default function ScoreItem({ scoreItem }) {
  const date = new Date();
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    // year: "numeric",
  };

  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(date);
  return (
    <div className="flex flex-col gap-3 text-xs sm:text-sm">
      <p className="text-xs">
        {scoreItem.fixture.status.short !== "NS"
          ? scoreItem.fixture.status.short
          : formattedDate}
      </p>
      <div className="flex flex-col gap-2">
        <div
          className={`flex justify-between items-center gap-12 ${
            scoreItem.score.halftime.home > scoreItem.score.halftime.away
              ? "font-semibold"
              : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <img
              src={scoreItem.teams.home.logo}
              className="h-6 w-6"
              alt={scoreItem.teams.home.name}
            />
            <p>{scoreItem.teams.home.name.substring(0, 3).toUpperCase()}</p>
          </div>
          <p>{scoreItem.score.halftime.home}</p>
        </div>
        <div
          className={`flex justify-between items-center gap-4 ${
            scoreItem.score.halftime.away > scoreItem.score.halftime.home
              ? "font-semibold"
              : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <img
              src={scoreItem.teams.away.logo}
              className="h-6 w-6"
              alt={scoreItem.teams.away.name}
            />
            <p>{scoreItem.teams.away.name.substring(0, 3).toUpperCase()}</p>
          </div>
          <p>{scoreItem.score.halftime.away}</p>
        </div>
      </div>
    </div>
  );
}
