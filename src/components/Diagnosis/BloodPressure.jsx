import BpChart from "./Chart"
import Rate from "./Rate";

const BloodPressure = ({ onProfileOpen }) => {
  return (
    <div className="pt-[2rem] px-4 xs:px-0 flex flex-col gap-[2.5rem] md:gap-[2rem] sm:gap[1rem] bg-white rounded-2xl">
      <div className="flex justify-between items-center xs:gap-2">
        <h1 className="text-[2rem] md:text-[1.5rem] sm:text-[1.2rem] xs:text-base font-bold mb-[1rem] xs:mb-0">
          Diagnostic History
        </h1>

        <button
          className="flex items-center justify-center bg-[#01F0D0] xs:text-xs xs:py-2 xs:px-3 py-2 px-4 rounded-3xl font-bold lg:hidden md:hidden"
          onClick={onProfileOpen}
        >
          User Profile
        </button>
      </div>

      <BpChart />

      <Rate />
    </div>
  );
};

export default BloodPressure