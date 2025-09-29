import React, { useState } from "react";
import arr from "../assets/back arrow.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import task from "../assets/Task duty.png";
import head from "../assets/head image.png";
import arr2 from "../assets/drop down arrow.png";
import { useEffect } from "react";
import { useRef } from "react";
import { ChevronDown, X } from "lucide-react";
import toast from "react-hot-toast";

const NewTask = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const newTask = { title, description, tags };

    try {
      const postNewTask = await fetch(
        "https://task-manager-backend-hyt8.onrender.com/api/tasks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTask),
        }
      );

      if (postNewTask.ok) {
        toast.success("Task Added Successfully!", { duration: 5000 });
        navigate("/mytask");
      } else {
        console.error("Failed to post goal");
      }
    } catch (error) {
      console.error("Error creating goal", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="h-[1070px] hidden md:block">
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

        <form
          onSubmit={handleSubmit}
          className="w-[1030px]  mx-auto relative mt-16"
        >
          <input
            id="taskTitle"
            name="taskTitle"
            type="text"
            placeholder="E.g Project Defense, Assignment..."
            className="w-full border border-gray-300 h-[84px] px-4 pt-5 pb-3 pl-6 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-[16px] placeholder-gray-400"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            required
          />

          <label
            htmlFor="taskTitle"
            className="absolute left-4 -top-3 bg-white px-2 text-[18px] text-[#9C9C9C]"
          >
            Task Title
          </label>

          <div className="w-[1030px]  mx-auto relative mt-16">
            <textarea
              id="taskTitle"
              name="taskTitle"
              type="text"
              placeholder="Briefly describe your task..."
              className="w-full border border-gray-300 h-[240px] px-4 pt-4.5  pb-40 pl-6 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-[16px] placeholder-gray-400 "
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              required
            />

            <label
              htmlFor="Description"
              className="absolute left-4 -top-3 bg-white px-2 text-[18px] text-[#9C9C9C]"
            >
              Description
            </label>
          </div>

          <div className="w-[1030px] mx-auto relative mt-16">
            <select
              id="tags"
              name="tags"
              className="w-full border border-gray-300 h-[84px] px-4 pt-5 pb-3 pl-6 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-[16px] bg-white"
              value={tags}
              onChange={(event) => {
                setTags(event.target.value);
              }}
            >
              <option value="">Select priority...</option>
              <option className="text-red-600" value="Urgent">
                Urgent
              </option>
              <option className="text-green-600" value="Important">
                Important
              </option>
            </select>

            <label
              htmlFor="tags" // Fixed: now matches id
              className="absolute left-4 -top-3 bg-white px-2 text-[18px] text-[#9C9C9C]"
            >
              Priority
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="text-[25px] font-medium  bg-[#974FD0] text-white w-[1040px] mx-auto text-center mt-10 rounded-[8px] py-[10px] px-[25px]"
          >
            {isLoading && (
              <svg
                className="animate-spin h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            {isLoading ? "Creating Task..." : "Done"}
          </button>
        </form>

        <p
          className="text-[#974FD0] underline mt-8 text-center cursor-pointer"
          onClick={scrollToTop}
        >
          Back To Top
        </p>
      </div>

      {/* MOBILE VERSION */}

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

          <div className="flex gap-4 items-center">
            <Link
              to="/mytask"
              className="font-medium text-[14px] text-[#292929]"
            >
              All Task
            </Link>
            <img src={head} alt="" className="w-[32px] h-[32px]" />
          </div>
        </nav>

        <div className="flex mt-6 px-4 items-center">
          <img
            src={arr}
            alt="Go back"
            onClick={() => {
              navigate("/mytask");
            }}
            className="w-[40px] h-[40px]"
          />
          <h4 className="text-[24px] ml-3 font-medium">New Task</h4>
        </div>

        <form onSubmit={handleSubmit} className="px-4 mt-8">
          <div className="relative">
            <input
              id="taskTitle"
              name="taskTitle"
              type="text"
              placeholder="E.g Project Defense, Assignment..."
              className="w-full border border-gray-300 h-[60px] px-3 pt-4 pb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-[14px] placeholder-gray-400"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              required
            />
            <label
              htmlFor="taskTitle"
              className="absolute left-3 -top-2.5 bg-white px-1 text-[14px] text-[#9C9C9C]"
            >
              Task Title
            </label>
          </div>

          <div className="relative mt-8">
            <textarea
              id="taskDescription"
              name="taskDescription"
              placeholder="Briefly describe your task..."
              className="w-full border border-gray-300 h-[120px] px-3 pt-4 pb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-[14px] placeholder-gray-400 resize-none"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
              required
            />
            <label
              htmlFor="taskDescription"
              className="absolute left-3 -top-2.5 bg-white px-1 text-[14px] text-[#9C9C9C]"
            >
              Description
            </label>
          </div>

          <div className="relative mt-8">
            <select
              id="tags"
              name="tags"
              className="w-full border border-gray-300 h-[60px] px-3 pt-4 pb-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-[14px] bg-white appearance-none"
              value={tags}
              onChange={(event) => {
                setTags(event.target.value);
              }}
            >
              <option  value="">Select priority...</option>
              <option  className="text-red-600" value="Urgent">Urgent</option>
              <option className="text-green-600" value="Important">Important</option>
            </select>
            <label
              htmlFor="tags"
              className="absolute left-3 -top-2.5 bg-white px-1 text-[14px] text-[#9C9C9C]"
            >
              Priority
            </label>
            {/* Custom dropdown arrow */}
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="
    w-full                 /* full width on mobile (fits 375px) */
    max-w-[1040px]         /* still caps at 1040px on large screens */
    block mx-auto          /* center when max width applies */
    mt-10
    px-4 py-3              /* mobile-friendly padding */
    text-base sm:text-[25px] /* smaller text on mobile, bigger on sm+ */
    font-medium
    bg-[#974FD0] text-white
    rounded-[8px]
    flex items-center justify-center gap-3
    disabled:opacity-60 disabled:cursor-not-allowed
    transition-all
  "
          >
            {isLoading && (
              <svg
                className="animate-spin h-5 w-5 sm:h-6 sm:w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}

            {isLoading ? "Creating Task..." : "Done"}
          </button>
        </form>

        <p
          className="text-[#974FD0] underline mt-6 text-center cursor-pointer text-[14px]"
          onClick={scrollToTop}
        >
          Back To Top
        </p>
      </div>
    </div>
  );
};

export default NewTask;
