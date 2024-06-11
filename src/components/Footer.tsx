import { IoPersonOutline } from "react-icons/io5";
import icon from "../assets/img/icon.png";
import { CiMail } from "react-icons/ci";
const Footer = () => {
  return (
    <div className="flex w-full justify-center items-center bg-primary pl-[50px] py-4 ">
      <div className="flex w-full flex-row gap-[10px]  items-start">
        <img className="w-6" src={icon} alt="" />
        <div className="flex flex-col w-full">
          <h1 className="text-white text-2xl font-bold">
            DO YOU NEED SUPPORT? CONTACT US:
          </h1>
          <h3 className="text-white">Bosch Professional Team</h3>
          <div className="grid grid-cols-3 mt-5">
            <div className="flex flex-row text-white items-center">
              <IoPersonOutline />
              <span>Lorem ipsum dolor sit</span>
            </div>
            <div className="flex flex-row text-white items-center">
              <IoPersonOutline />
              <span>Lorem ipsum dolor sit</span>
            </div>
            <div className="flex flex-row text-white items-center">
              <IoPersonOutline />
              <span>Lorem ipsum dolor sit</span>
            </div>
            <div className="flex flex-row text-white items-center">
              <CiMail />
              <span>Lorem ipsum dolor sit</span>
            </div>
            <div className="flex flex-row text-white items-center">
              <CiMail />
              <span>Lorem ipsum dolor sit</span>
            </div>
            <div className="flex flex-row text-white items-center">
              <CiMail />
              <span>Lorem ipsum dolor sit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
