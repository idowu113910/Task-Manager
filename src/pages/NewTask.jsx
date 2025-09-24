import React, { useState } from "react";
import arr from "../assets/back arrow.png";
import { Link, useNavigate } from "react-router-dom";
import task from "../assets/Task duty.png";
import head from "../assets/head image.png";
import arr2 from "../assets/drop down arrow.png";
import { useEffect } from "react";
import { useRef } from "react";
import { ChevronDown, X } from "lucide-react";

const NewTask = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="h-[1070px]">
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
            to="/mytask"
            className="font-medium text-[18px] text-[#292929] mt-5"
          >
            All Task
          </Link>

          <img src={head} alt="" />
        </div>
      </nav>

      <div className="flex mt-16 px-35">
        <img
          src={arr}
          alt="Go back"
          onClick={() => {
            navigate("/mytask");
          }}
          className="w-[60px] h-[60px] mt-1"
        />

        <h4 className=" text-[40px] mt-1 font-medium">New Task</h4>
      </div>

      <div className="w-[1030px]  mx-auto relative mt-16">
        <input
          id="taskTitle"
          name="taskTitle"
          type="text"
          placeholder="E.g Project Defense, Assignment..."
          className="w-full border border-gray-300 h-[84px] px-4 pt-5 pb-3 pl-6 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-[16px] placeholder-gray-400"
        />

        <label
          htmlFor="taskTitle"
          className="absolute left-4 -top-3 bg-white px-2 text-[18px] text-[#9C9C9C]"
        >
          Task Title
        </label>
      </div>

      <div className="w-[1030px]  mx-auto relative mt-16">
        <input
          id="taskTitle"
          name="taskTitle"
          type="text"
          placeholder="Briefly describe your task..."
          className="w-full border border-gray-300 h-[240px] px-4  pb-40 pl-6 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-[16px] placeholder-gray-400"
        />

        <label
          htmlFor="Description"
          className="absolute left-4 -top-3 bg-white px-2 text-[18px] text-[#9C9C9C]"
        >
          Description
        </label>
      </div>

      <div className="w-[1030px]  mx-auto relative mt-16">
        <input
          id="taskTitle"
          name="taskTitle"
          type="text"
          className="w-full border border-gray-300 h-[84px] px-4 pt-5 pb-3 pl-6 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-[16px] placeholder-gray-400"
        />

        <img src={arr2} alt="" className="relative left-[980px] bottom-11" />

        <label
          htmlFor="Tags"
          className="absolute left-4 -top-3 bg-white px-2 text-[18px] text-[#9C9C9C]"
        >
          Tags
        </label>
      </div>

      <div className="bg-[#974FD0] text-white w-[1040px] mx-auto text-center mt-10 rounded-[8px] py-[10px] px-[25px]">
        <button
          onClick={() => {
            navigate("/mytask");
          }}
          className="text-[25px] font-medium"
        >
          Done
        </button>
      </div>

      <p
        className="text-[#974FD0] underline mt-8 text-center cursor-pointer"
        onClick={scrollToTop}
      >
        Back To Top
      </p>
    </div>
  );
};

export default NewTask;
