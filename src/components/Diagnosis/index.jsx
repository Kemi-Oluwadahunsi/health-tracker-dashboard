// import { useState } from "react";
// import BloodPressure from "./BloodPressure"
// import DiagnosticList from "./DiagnosticList";
// import UserProfile from "../UserProfile/Index";

// const Index = () => {
//    const [isProfileOpen, setIsProfileOpen] = useState(false);

//    const handleProfileOpen = () => {
//      setIsProfileOpen(true);
//    };

//    const handleProfileClose = () => {
//      setIsProfileOpen(false);
//    };
//   return (
//     <div className="flex flex-col gap-[3rem] sm:gap-[1rem] px-4">
//       <BloodPressure onProfileOpen={handleProfileOpen} />
//       <DiagnosticList />

//       {isProfileOpen && (
//         <div className="fixed top-[5%] bottom-0 w-[100vw] bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-4 rounded-xl w-[90%] md:w-[70%] max-w-[500px] relative">
//             <button
//               className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
//               onClick={handleProfileClose}
//             >
//               &times;
//             </button>
//             <UserProfile />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Index

import { useState } from "react";
import BloodPressure from "./BloodPressure";
import DiagnosticList from "./DiagnosticList";
import UserProfile from "../UserProfile/Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleProfileOpen = () => {
    setIsProfileOpen(true);
  };

  const handleProfileClose = () => {
    setIsProfileOpen(false);
  };

  return (
    <div className="flex flex-col gap-[3rem] sm:gap-[1rem] px-4 xs:px-0">
      <BloodPressure
        onProfileOpen={handleProfileOpen}
      />
      <DiagnosticList />
      {isProfileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50 overflow-y-auto">
          <div className="bg-white p-4 rounded-xl w-[90%] md:w-[70%] max-w-[500px] mt-10 relative">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white text-[1.5rem] px-2 rounded-full"
              onClick={handleProfileClose}
            >
              <FontAwesomeIcon icon={faClose} />
            </button>
            <UserProfile />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
