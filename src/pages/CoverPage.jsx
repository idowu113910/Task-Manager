import React from "react";
import head from "../assets/head image.png";
import { Link, useNavigate } from "react-router-dom";
import task from "../assets/Task duty.png";
import board from "../assets/board.png";

const CoverPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-dvh w-full bg-white overflow-x-hidden">
      {/* Nav */}
      <nav className="flex items-center justify-between px-4 py-3 tablet-min:px-6 tablet-min:py-4 laptop-min:px-16 laptop-min:py-4 desktop:px-32 desktop:py-5 border-b-[0.5px] border-[#B8B6B6]">
        <img
          src={task}
          alt="TaskDuty"
          onClick={() => navigate("/")}
          className="h-[28px] tablet-min:h-[32px] laptop-min:h-[36px] desktop:h-[41px] cursor-pointer"
        />

        <div className="flex items-center gap-3 tablet-min:gap-4 laptop-min:gap-6 desktop:gap-8">
          <Link
            to="/newtask"
            className="font-medium text-[13px] tablet-min:text-[14px] laptop-min:text-[16px] desktop:text-[18px] text-[#292929] whitespace-nowrap"
          >
            New Task
          </Link>

          <Link
            to="/mytask"
            className="font-medium text-[13px] tablet-min:text-[14px] laptop-min:text-[16px] desktop:text-[18px] text-[#292929] whitespace-nowrap"
          >
            All Tasks
          </Link>

          <img
            src={head}
            alt=""
            className="w-[28px] h-[28px] tablet-min:w-[32px] tablet-min:h-[32px] laptop-min:w-[36px] laptop-min:h-[36px] desktop:w-auto desktop:h-auto rounded-full object-cover"
          />
        </div>
      </nav>

      {/* Hero */}
      <div className="mx-auto w-full max-w-[1600px] px-4 py-8 tablet-min:px-6 tablet-min:py-10 laptop-min:px-20 laptop-min:py-20 desktop:px-40 desktop:py-24">
        <div className="flex flex-col items-center gap-8 laptop-min:flex-row laptop-min:items-center laptop-min:justify-between laptop-min:gap-12 desktop:gap-16">
          {/* Text column */}
          <div className="w-full max-w-[560px] text-center laptop-min:text-left">
            <h1 className="text-[28px] mobile-min:text-[30px] tablet-min:text-[38px] laptop-min:text-[46px] desktop:text-[50px] font-medium leading-[110%] laptop-min:leading-[100%]">
              Manage your Tasks on{" "}
              <span className="text-[#974FD0]">TaskDuty</span>
            </h1>

            <p className="mt-4 tablet-min:mt-6 laptop-min:mt-8 font-normal text-[#737171] text-[15px] tablet-min:text-[17px] laptop-min:text-[20px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at
              platea tempus duis non eget. Hendrerit tortor fermentum bibendum
              mi nisl semper porttitor. Nec accumsan.
            </p>

            <div className="mt-6 tablet-min:mt-8 flex justify-center laptop-min:justify-start">
              <div
                onClick={() => navigate("/mytask")}
                role="button"
                tabIndex={0}
                className="rounded-[8px] bg-[#974FD0] text-white py-[10px] px-6 tablet-min:px-[25px] cursor-pointer transition-colors hover:bg-[#7f3fb3]"
              >
                <button className="font-medium text-[15px] tablet-min:text-[16px] text-center">
                  Go to My Tasks
                </button>
              </div>
            </div>
          </div>

          {/* Board image column */}
          <div className="w-full max-w-[500px] laptop-min:max-w-none laptop-min:flex-1 flex justify-center laptop-min:justify-end">
            <img
              src={board}
              alt=""
              className="w-full max-w-[300px] mobile-min:max-w-[340px] tablet-min:max-w-[420px] laptop-min:max-w-[500px] desktop:max-w-[600px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
