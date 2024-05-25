
import logo from "../../assets/TestLogo.svg";
import home from "../../assets/home.svg";
import user from "../../assets/user.svg";
import calender from "../../assets/calender.svg";
import message from "../../assets/message.svg";
import creditcard from "../../assets/creditcard.svg";
import doc from "../../assets/doc.png";
import settings from "../../assets/settings.svg";
import more from "../../assets/more.svg";

const LargeScreenHeader = () => {
  return (
    <div className="flex items-center px-[2rem] md:px-[1rem] bg-[#fff] rounded-[2rem] py-1">
      <div className="flex justify-between items-center w-full md:text-sm">
        <div className="md:basis-[15%]">
          <img src={logo} alt="logo" />
        </div>

        <nav className="basis-[50%] md:basis-[55%]">
          <ul className="font-[Manrope] text-[#072635] flex justify-between items-center ">
            <div className="flex gap-2 md:gap-1 items-center">
              <div>
                <img src={home} alt="home" />
              </div>
              <li>Overview</li>
            </div>

            <div className="bg-[#01F0D0] flex gap-2 md:gap-1 rounded-3xl px-[1rem] md:px-3 md:py-1 py-[0.5rem] items-center">
              <div>
                <img src={user} alt="user" />
              </div>
              <li>Patients</li>
            </div>

            <div className="flex gap-2 md:gap-1 items-center">
              <div>
                <img src={calender} alt="calender" />
              </div>
              <li>Schedule</li>
            </div>

            <div className="flex gap-2 md:gap-1 items-center">
              <div>
                <img src={message} alt="message" />
              </div>
              <li>Message</li>
            </div>

            <div className="flex gap-2 md:gap-1 items-center">
              <div>
                <img src={creditcard} alt="creditcard" />
              </div>
              <li>Transactions</li>
            </div>
          </ul>
        </nav>

        <div className="flex gap-3">
          <div className="flex gap-2">
            <div className="md:w-[20%]">
              <img src={doc} alt="doc" />
            </div>

            <div>
              <h3 className="font-bold">Dr. Jose Simmon</h3>
              <p>General Practitioner</p>
            </div>
          </div>

          <div className="w-[0.1rem] bg-[#EDEDED]"></div>

          <div className="flex gap-2">
            <img src={settings} alt="settings" className="w-[70%] md:w-[60%]" />
            <img src={more} alt="more" className="w-[10%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeScreenHeader;
