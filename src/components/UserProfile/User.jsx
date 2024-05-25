import { useContext } from "react";
import { DataContext } from "../../hooks/DataContext";
import calender from "../../assets/BirthIcon.svg"
import gender from "../../assets/FemaleIcon.svg"
import phone from "../../assets/PhoneIcon.svg"
import insurance from "../../assets/InsuranceIcon.svg"

const User = () => {
    const { data } = useContext(DataContext);

    if (!data) return null;

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(date);
    };

  return (
    <div className="bg-white md:px-2 px-4 py-8 rounded-2xl">
      <div key={data.name} className="flex flex-col gap-8 ">
        <div className="flex flex-col gap-8 items-center justify-center">
          <img
            src={data.profile_picture}
            alt="Jessica"
            className="object-cover w-[200px] md:w-[120px] sm:w-[100px] xs:w-[100px]"
          />

          <h2 className="font-bold text-[2rem] md:text-[1.5rem]">{data.name}</h2>
        </div>

        <div className="flex flex-col gap-8 text-[0.9rem]">
          <div className="flex gap-8 md:gap-4 items-center">
            <div className="md:w-[20%]">
              <img src={calender} alt="calender" className=" "/>
            </div>
            <div>
              <h3>Date of Birth</h3>
              <p className="font-bold">{formatDate(data.date_of_birth)}</p>
            </div>
          </div>

          <div className="flex gap-8 md:gap-4 items-center">
            <div className="md:w-[20%]">
              <img src={gender} alt="gender" className=" "/>
            </div>
            <div>
              <h3>Gender</h3>
              <p className="font-bold">{data.gender}</p>
            </div>
          </div>

          <div className="flex gap-8 md:gap-4 items-center">
            <div className="md:w-[20%]">
              <img src={phone} alt="phone" className=" "/>
            </div>
            <div>
              <h3>Contact Info</h3>
              <p className="font-bold">{data.phone_number}</p>
            </div>
          </div>

          <div className="flex gap-8 md:gap-4 items-center">
            <div className="md:w-[20%]">
              <img src={phone} alt="phone" className=" "/>
            </div>
            <div>
              <h3>Emergency Contact</h3>
              <p className="font-bold">{data.emergency_contact}</p>
            </div>
          </div>

          <div className="flex gap-8 md:gap-4 items-center">
            <div className="md:w-[20%]">
              <img src={insurance} alt="insurance" className=" "/>
            </div>
            <div>
              <h3>Insurance Provider</h3>
              <p className="font-bold">{data.insurance_type}</p>
            </div>
          </div>

          <div className="flex items-center justify-center bg-[#01F0D0] py-3 rounded-3xl font-bold mt-4">
            <button>Show All Information</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
