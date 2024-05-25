import { useState } from "react";
import logo from "../../assets/TestLogo.svg";
import home from "../../assets/home.svg";
import user from "../../assets/user.svg";
import calender from "../../assets/calender.svg";
import message from "../../assets/message.svg";
import creditcard from "../../assets/creditcard.svg";
import doc from "../../assets/doc.png";
import settings from "../../assets/settings.svg";
import more from "../../assets/more.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";


const SmallScreenHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center px-[3rem] xs:px-[1rem] bg-[#fff] rounded-[2rem] py-2">
      <div className="flex justify-between items-center w-full">
        <div className="sm:basis-[20%] basis-[40%]">
          <img src={logo} alt="logo" />
        </div>

        <div className="flex items-center">
            
          <FontAwesomeIcon
            icon={isMenuOpen ? faClose : faBars}
            alt={isMenuOpen ? "Close Menu" : "Open Menu"}
            className="cursor-pointer z-50 text-[2rem] xs:text-[1.5rem]"
            onClick={handleToggleMenu}
          />
        </div>

        {isMenuOpen && (
          <nav className="absolute top-[9%] left-[50%] xs:left-0 w-[50%] xs:w-[95%] xs:ml-4 h-full bg-white flex flex-col items-center text-left  gap-[3rem] justify-center xs:justify-start xs:pt-[4rem] z-50 rounded-2xl font-bold xs:shadow-2xl">
            <ul className=" flex flex-col justify-between items-center gap-[3rem] text-lg">
              <div className="flex gap-8 items-center">
                <div>
                  <img src={home} alt="home" />
                </div>
                <li>Overview</li>
              </div>

              <div className="bg-[#01F0D0] flex gap-6 rounded-3xl px-[2rem] py-[0.5rem] items-center">
                <div>
                  <img src={user} alt="user" />
                </div>
                <li>Patients</li>
              </div>

              <div className="flex gap-8 items-center">
                <div>
                  <img src={calender} alt="calender" />
                </div>
                <li>Schedule</li>
              </div>

              <div className="flex gap-8 items-center">
                <div>
                  <img src={message} alt="message" />
                </div>
                <li>Message</li>
              </div>

              <div className="flex gap-8 items-center pl-8">
                <div>
                  <img src={creditcard} alt="creditcard" />
                </div>
                <li>Transactions</li>
              </div>
            </ul>

            <div className="flex items-center gap-4">
              <div className="flex gap-2 xs:gap-4">
                <div className="w-[20%]">
                  <img src={doc} alt="doc" />
                </div>

                <div>
                  <h3 className="font-bold">Dr. Jose Simmon</h3>
                  <p>General Practitioner</p>
                </div>
              </div>

              <div className="w-[0.5rem] bg-[#000]"></div>

              <div className="flex gap-2">
                <img
                  src={settings}
                  alt="settings"
                  className="w-[70%] md:w-[60%]"
                />
                <img src={more} alt="more" className="w-[10%]" />
              </div>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default SmallScreenHeader;
