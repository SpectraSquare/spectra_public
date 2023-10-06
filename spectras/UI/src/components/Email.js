import { HiOutlineMail } from "react-icons/hi";
import { MdFacebook } from "react-icons/md";
import { FaSnapchat } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { BiLogoInstagramAlt } from "react-icons/bi";
// import { AiFillThunderbolt } from "react-icons/ai";
// import { Link } from "react-router-dom";

const Email = () => {
  return (
    <div className="bg-pink-200 grid place-content-center h-screen">
      <div className=" bg-white max-w-[580px] h-full shadow-lg shadow-gray-400">
        <div className="grid place-content-center">
          <img
            className="rounded-lg w-[80px] h-[80px] p-2"
            src="/images/logo.png"
            alt="logo"
          />
        </div>
        <div className="bg-orange-600 h-28 grid place-content-center">
          <div className="rounded-3xl bg-white grid place-content-center h-12 w-12">
            <HiOutlineMail className="text-orange-600 h-12 w-12 p-2" />
          </div>
        </div>
        <div>
          <div className="m-5">
            <h1 className="font-bold text-3xl my-5">Email Verification</h1>
            <div>
              Hi name, <br />
              You are almost set to start enjoying company name. Simply click
              the link below to verify your email address and get started. The
              link expires in 48 hours.{" "}
            </div>
            <div className="flex justify-center items-center">
              <button className="text-white my-8 p-5 bg-orange-600 rounded-sm">
                Verify email address
              </button>
            </div>
            <hr className="my-8 border-orange-600" />
          </div>
          <div className="grid place-content-center justify-evenly">
            <div className="flex flex-row justify-center">
              <MdFacebook className="text-3xl " />
              <FaSnapchat className="text-3xl " />
              <SiLinkedin className="text-3xl rounded-full " />
              <BiLogoInstagramAlt className="text-3xl " />
            </div>
            <div className="p-3">
              B-105 Broadway Suit 1500 New York, NY 00423
            </div>
            <div className="my-5 font-bold text-sm flex justify-center">
              | Privacy Policies | Contact Details |
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row ">
        <Link to="" className="underline my-3 ml-4">
          Unsubscribe
        </Link>
        <div className="grid place-content-end">
          <AiFillThunderbolt />
          by Mailmondo
        </div>
      </div> */}
    </div>
  );
};

export default Email;
