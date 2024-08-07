export default function ScoreItem({ scoreItem }) {
  // console.log(sc)
  return (
    <div className=" flex flex-col gap-3 text-xs sm:text-sm">
      <p>Final</p>
      <div>
        <div
          className={`flex justify-between gap-4 ${
            scoreItem.homeScore > scoreItem.awayScore ? "font-semibold" : ""
          }`}
        >
          <p>{scoreItem.homeShortName}</p>
          <p>{scoreItem.homeScore}</p>
        </div>
        <div
          className={`flex justify-between gap-4 ${
            scoreItem.awayScore > scoreItem.homeScore ? "font-semibold" : ""
          }`}
        >
          <p>{scoreItem.awayShortName}</p>
          <p>{scoreItem.awayScore}</p>
        </div>
      </div>
    </div>
  );
}
