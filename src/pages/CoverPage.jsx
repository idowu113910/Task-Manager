import React from "react";
import head from "../assets/head image.png";
import { Link, useNavigate } from "react-router-dom";
import task from "../assets/Task duty.png";
import board from "../assets/board.png";

const CoverPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="relative hidden md:block">
        <nav className="flex justify-between px-40 py-4 border-b-[0.5px] border-[#B8B6B6]">
          <img
            src={task}
            alt=""
            onClick={() => {
              navigate("/");
            }}
            className="h-[41px] mt-3"
          />

          <div className="flex gap-8">
            <Link
              to="/newtask"
              className="font-medium text-[18px] text-[#292929] mt-5"
            >
              New Task
            </Link>

            <Link
              to="/mytask"
              className="font-medium text-[18px] text-[#292929] mt-5"
            >
              All Tasks
            </Link>

            <img src={head} alt="" />
          </div>
        </nav>

        <div className="w-[535px]  ml-39 mt-20">
          <h1 className="text-[50px] font-medium leading-[100%]">
            Manage your Tasks on{" "}
            <span className="text-[#974FD0] ">TaskDuty</span>
          </h1>

          <p className="mt-8 font-normal text-[#737171] ml-2 text-[20px]  pr-14 w-[535px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
            sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
            tempus duis non eget.Hendrerit tortor fermentum bibendum mi nisl
            semper porttitor. Nec accumsan.
          </p>

          <div
            onClick={() => {
              navigate("/mytask");
            }}
            className="mt-4 rounded-[8px] bg-[#974FD0] ml-2 text-white py-[10px] px-[25px] w-[180px]"
          >
            <button className="font-medium text-[16px] text-center ">
              Go to My Tasks
            </button>
          </div>
        </div>
        <img
          src={board}
          alt=""
          className="absolute left-[800px] bottom-[-20px]"
        />
      </div>

      <div className="w-[375px] min-h-screen bg-white block md:hidden">
        <nav className="flex justify-between px-4 py-3 border-b-[0.5px] border-[#B8B6B6]">
          <img
            src={task}
            alt=""
            onClick={() => {
              navigate("/");
            }}
            className="h-[28px] mt-2"
          />

          <div className="flex gap-3 items-center">
            <Link
              to="/newtask"
              className="font-medium text-[14px] text-[#292929]"
            >
              New Task
            </Link>

            <Link
              to="/mytask"
              className="font-medium text-[14px] text-[#292929]"
            >
              All Tasks
            </Link>

            <img src={head} alt="" className="w-[32px] h-[32px]" />
          </div>
        </nav>

        <div className="px-4 mt-8">
          <h1 className="text-[32px] font-medium leading-[100%] text-center">
            Manage your Tasks on{" "}
            <span className="text-[#974FD0]">TaskDuty</span>
          </h1>

          <p className="mt-6 font-normal text-[#737171] text-[16px] text-center leading-relaxed px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
            sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
            tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
            semper porttitor. Nec accumsan.
          </p>

          <div className="flex justify-center mt-8">
            <div
              onClick={() => {
                navigate("/mytask");
              }}
              className="rounded-[8px] bg-[#974FD0] text-white py-3 px-6 cursor-pointer"
            >
              <button className="font-medium text-[16px]">
                Go to My Tasks
              </button>
            </div>
          </div>

          {/* Mobile Board Image */}
          <div className="flex justify-center mt-12 mb-8">
            <img src={board} alt="" className="max-w-[320px] w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
