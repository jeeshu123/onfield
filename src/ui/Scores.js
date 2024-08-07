import ScoreList from "./ScoreList";

export default function Scores() {
  return (
    <>
      <div className="flex justify-between px-12 py-3 mt-6 text-sm md:text-base">
        <div className="flex gap-3">
          <div>EPL</div>
          <div>Today</div>
        </div>
        <div>All Scores</div>
      </div>
      <ScoreList />
    </>
  );
}
