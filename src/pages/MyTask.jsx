import React from "react";
import plus from "../assets/Vector plus.png";
import { Link, useNavigate } from "react-router-dom";
import head from "../assets/head image.png";
import task from "../assets/Task duty.png";
import edit from "../assets/edit.png";
import del from "../assets/delete.png";

const MyTask = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
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
          <Link className="font-medium text-[18px] text-[#292929] mt-5">
            New Task
          </Link>

          <img src={head} alt="" />
        </div>
      </nav>

      <div className="flex justify-between px-39 mt-10">
        <h4 className="text-[45px] font-medium leading-[100%] text-[#292929]">
          My Tasks
        </h4>

        <div className="flex gap-3">
          <Link to="/newtask">
            <img src={plus} alt="" className="w-[18px] h-[18px] mt-2" />
          </Link>

          <Link
            to="/newtask"
            className="text-[#974FD0] font-medium text-[24px]"
          >
            Add New Task
          </Link>
        </div>
      </div>

      <div className=" border-[0.5px] border-[#B8B6B6] mt-10 rounded-[10px] w-[1053px] h-[250px] ml-39 ">
        <div className="flex justify-between   mt-8 border-[#B8B6B6] max-w-[1030px] mx-auto  border-b-[0.5px]">
          <h5 className="font-normal text-[#F38383] text-[20px] ml-3 mt-3">
            Urgent
          </h5>

          <div className="w-[]"></div>

          <div className="flex  mr-8 gap-8 mb-3">
            <button
              onClick={() => {
                navigate("/edittask");
              }}
              className="bg-[#974FD0] rounded-[8px]  px-[20px] py-[10px] flex gap-[10px] "
            >
              <img src={edit} alt="" />
              <p className="text-[#FAF9FB] font-medium">Edit</p>
            </button>

            <div className="flex bg-[#FFFFFF] border border-[#974FD0] text-[#974FD0] rounded-[8px]  px-[20px] py-[10px]  gap-[10px]">
              <img src={del} alt="" />
              <button className="font-medium">Delete</button>
            </div>
          </div>
        </div>
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

export default MyTask;
