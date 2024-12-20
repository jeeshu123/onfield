// import LatestNews from "../components/LatestNews";
// import Standings from "./Standings";

// export default function Latest() {
//   return (
//     <div className="px-6 mt-24 grid grid-cols-1 lg:grid-cols-[2fr_1fr] md:px-12 lg:gap-x-4 overflow-hidden">
//       <LatestNews />
//       <div>
//         <p className="italic font-bold text-2xl">Standings</p>
//         <Standings />
//       </div>
//     </div>
//   );
// }

import LatestNews from "../components/LatestNews";
import Standings from "./Standings";

export default function Latest() {
  return (
    <div className="px-6 mt-24 grid grid-cols-1 lg:grid-cols-[2fr_1fr] md:px-12 lg:gap-x-4 overflow-hidden">
      <div className="overflow-y-auto h-full" style={{ maxHeight: "1600px" }}>
        <LatestNews />
      </div>
      <div style={{ maxHeight: "1600px" }}>
        <p className="italic font-bold text-2xl">Standings</p>
        <Standings />
      </div>
    </div>
  );
}
