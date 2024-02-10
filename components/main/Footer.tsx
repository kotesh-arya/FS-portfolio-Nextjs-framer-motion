import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-center flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]"> Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">
                <a href="#about_me">Github</a>
              </span>
            </p>{" "}
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">
                <a href="">Linkedin</a>
              </span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">
                <a href="">Twitter</a>
              </span>
            </p>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]"> About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become a Sponser</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Learn about me</span>
            </p>{" "}
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                kotesharya1@gmail.com
              </span>
            </p>
          </div>
        </div>
        <div className="mb-[20px] text-[15px]  text-center">
          &copy; Fullstack Dev 2024 Inc. All Rights reserverd.
        </div>
      </div>
    </div>
  );
};

export default Footer;
