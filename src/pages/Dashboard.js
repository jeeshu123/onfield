// function Dashboard() {
//   return (
//     <div className="flex flex-col w-1/2 mx-auto bg-green-200 px-2 py-4 rounded-md">
//       <div className="flex flex-wrap justify-between gap-3 p- items-center">
//         <p className="text-green-800 tracking-wider text-3xl font-bold leading-tight">
//           Profile
//         </p>
//         <p className="text-slate-600 text-sm font-normal leading-normal">
//           Manage your user profile and settings
//         </p>
//       </div>
//       <div className="bg-green-200">
//         <h3 className="text-green-700 text-lg font-bold leading-tight tracking-wide px-4 pb-2 pt-4">
//           User Information
//         </h3>
//         <div className="flex items-center gap-4 bg-green-100 px-4 py-2 justify-between">
//           <div className="flex flex-col justify-center">
//             <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">
//               Email
//             </p>
//             <p className="text-[#4e7397] text-sm font-normal leading-normal line-clamp-2">
//               jane@acme.com
//             </p>
//           </div>
//           <div className="shrink-0">
//             <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-medium leading-normal w-fit">
//               <span className="truncate">Edit</span>
//             </button>
//           </div>
//         </div>
//         <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between">
//           <div className="flex flex-col justify-center">
//             <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">
//               Name
//             </p>
//             <p className="text-[#4e7397] text-sm font-normal leading-normal line-clamp-2">
//               Jane Williams
//             </p>
//           </div>
//           <div className="shrink-0">
//             <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-medium leading-normal w-fit">
//               <span className="truncate">Edit</span>
//             </button>
//           </div>
//         </div>
//         <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between">
//           <div className="flex flex-col justify-center">
//             <p className="text-[#0e141b] text-base font-medium leading-normal line-clamp-1">
//               Location
//             </p>
//             <p className="text-[#4e7397] text-sm font-normal leading-normal line-clamp-2">
//               123 Main St.
//             </p>
//           </div>
//           <div className="shrink-0">
//             <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-medium leading-normal w-fit">
//               <span className="truncate">Edit</span>
//             </button>
//           </div>
//         </div>
//         <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
//           Account Settings
//         </h3>
//         <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-14 justify-between">
//           <p className="text-[#0e141b] text-base font-normal leading-normal flex-1 truncate">
//             Change Password
//           </p>
//           <div className="shrink-0">
//             <div
//               className="text-[#0e141b] flex size-7 items-center justify-center"
//               data-icon="CaretRight"
//               data-size="24px"
//               data-weight="regular"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24px"
//                 height="24px"
//                 fill="currentColor"
//                 viewBox="0 0 256 256"
//               >
//                 <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
//               </svg>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-14 justify-between">
//           <p className="text-[#0e141b] text-base font-normal leading-normal flex-1 truncate">
//             Delete Account
//           </p>
//           <div className="shrink-0">
//             <div
//               className="text-[#0e141b] flex size-7 items-center justify-center"
//               data-icon="CaretRight"
//               data-size="24px"
//               data-weight="regular"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24px"
//                 height="24px"
//                 fill="currentColor"
//                 viewBox="0 0 256 256"
//               >
//                 <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
//               </svg>
//             </div>
//           </div>
//         </div>
//         <h3 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
//           User Preferences
//         </h3>
//         <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-14 justify-between">
//           <p className="text-[#0e141b] text-base font-normal leading-normal flex-1 truncate">
//             Theme
//           </p>
//           <div className="shrink-0">
//             <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-medium leading-normal w-fit">
//               <span className="truncate">Dark Mode</span>
//             </button>
//           </div>
//         </div>
//         <div className="flex items-center gap-4 bg-slate-50 px-4 min-h-14 justify-between">
//           <p className="text-[#0e141b] text-base font-normal leading-normal flex-1 truncate">
//             Language
//           </p>
//           <div className="shrink-0">
//             <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-medium leading-normal w-fit">
//               <span className="truncate">English</span>
//             </button>
//           </div>
//         </div>
//         <div className="flex px-4 py-3 justify-start">
//           <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-transparent text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em]">
//             <span className="truncate">Log Out</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React from "react";
import { useAuthContext } from "../context/AuthContext";

function Dashboard() {
  const { user } = useAuthContext();
  return (
    <div className="flex flex-col w-1/2 mx-auto bg-green-200 p-4 rounded-md">
      {/* Profile Header */}
      <div className="flex justify-between items-center pb-4">
        <p className="text-green-800 text-3xl font-bold">Profile</p>
        <p className="text-slate-600 text-sm">
          Manage your user profile and settings
        </p>
      </div>

      {/* User Information */}
      <Section title="User Information">
        <InfoRow label="Email" value={user.email} />
        <InfoRow label="Name" value={user.firstName + " " + user.lastName} />
      </Section>

      {/* Account Settings */}
      <Section title="Account Settings">
        <ActionRow label="Change Password" />
        <ActionRow label="Delete Account" />
      </Section>

      {/* User Preferences */}
      <Section title="User Preferences">
        <ButtonRow label="Theme" buttonText="Dark Mode" />
        <ButtonRow label="Language" buttonText="English" />
      </Section>

      {/* Log Out Button */}
      <div className="flex px-4 py-3">
        <button className="w-24 h-10 font-bold text-[#0e141b] bg-transparent rounded-lg">
          Log Out
        </button>
      </div>
    </div>
  );
}

const Section = ({ title, children }) => (
  <div className="bg-green-200 mb-4">
    <h3 className="text-green-700 text-lg font-bold px-4 pb-2">{title}</h3>
    {children}
  </div>
);

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between items-center bg-green-100 px-4 py-2">
    <div>
      <p className="text-[#0e141b] text-base font-medium">{label}</p>
      <p className="text-[#4e7397] text-sm">{value}</p>
    </div>
    <button className="h-8 px-4 bg-[#e7edf3] text-sm font-medium text-[#0e141b] rounded-xl">
      Edit
    </button>
  </div>
);

const ActionRow = ({ label }) => (
  <div className="flex justify-between items-center bg-green-100 px-4 py-2">
    <p className="text-[#0e141b] text-base">{label}</p>
    <div className="text-[#0e141b]">
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
        <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
      </svg>
    </div>
  </div>
);

const ButtonRow = ({ label, buttonText }) => (
  <div className="flex justify-between items-center bg-slate-50 px-4 py-2">
    <p className="text-[#0e141b] text-base">{label}</p>
    <button className="h-8 px-4 bg-[#e7edf3] text-sm font-medium text-[#0e141b] rounded-xl">
      {buttonText}
    </button>
  </div>
);

export default Dashboard;
