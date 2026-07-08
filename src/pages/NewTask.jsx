import React, { useState } from "react";
import arr from "../assets/back arrow.png";
import { Link, useNavigate } from "react-router-dom";
import task from "../assets/Task duty.png";
import head from "../assets/head image.png";
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

    // Abort the request if the server doesn't respond within 20 seconds,
    // so the button never spins forever on a hung/cold-starting backend.
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);

    try {
      const postNewTask = await fetch(
        "https://task-manager-backend-hyt8.onrender.com/api/tasks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTask),
          signal: controller.signal,
        },
      );

      clearTimeout(timeoutId);

      if (postNewTask.ok) {
        toast.success("Task Added Successfully!", { duration: 5000 });
        navigate("/mytask");
      } else {
        toast.error("Failed to create task. Please try again.");
        console.error("Failed to post goal");
      }
    } catch (error) {
      clearTimeout(timeoutId);
      if (error.name === "AbortError") {
        toast.error(
          "The server is taking too long to respond. It may be waking up — please try again in a moment.",
        );
        console.error("Request timed out");
      } else {
        toast.error("Something went wrong. Please try again.");
        console.error("Error creating goal", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-dvh w-full bg-white overflow-x-hidden">
      {/* Nav */}
      <nav className="flex items-center justify-between px-4 py-3 tablet-min:px-6 tablet-min:py-4 laptop-min:px-16 laptop-min:py-4 desktop:px-40 desktop:py-5 border-b-[0.5px] border-[#B8B6B6]">
        <img
          src={task}
          alt=""
          onClick={() => navigate("/")}
          className="h-[28px] tablet-min:h-[32px] laptop-min:h-[36px] desktop:h-[41px] cursor-pointer"
        />

        <div className="flex items-center gap-3 tablet-min:gap-4 laptop-min:gap-6 desktop:gap-8">
          <Link
            to="/mytask"
            className="font-medium text-[13px] tablet-min:text-[14px] laptop-min:text-[16px] desktop:text-[18px] text-[#292929] whitespace-nowrap"
          >
            All Task
          </Link>

          <img
            src={head}
            alt=""
            className="w-[28px] h-[28px] tablet-min:w-[32px] tablet-min:h-[32px] laptop-min:w-auto laptop-min:h-auto rounded-full object-cover"
          />
        </div>
      </nav>

      {/* Page content */}
      <div className="mx-auto w-full max-w-[1100px] px-4 tablet-min:px-6 laptop-min:px-10 desktop:px-0">
        {/* Back + title */}
        <div className="flex items-center mt-6 tablet-min:mt-10 laptop-min:mt-16 gap-3 tablet-min:gap-4">
          <img
            src={arr}
            alt="Go back"
            onClick={() => navigate("/mytask")}
            className="w-[36px] h-[36px] tablet-min:w-[48px] tablet-min:h-[48px] laptop-min:w-[60px] laptop-min:h-[60px] cursor-pointer"
          />
          <h4 className="text-[22px] tablet-min:text-[28px] laptop-min:text-[36px] desktop:text-[40px] font-medium">
            New Task
          </h4>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full mx-auto mt-8 tablet-min:mt-10 laptop-min:mt-16"
        >
          {/* Title */}
          <div className="relative">
            <input
              id="taskTitle"
              name="taskTitle"
              type="text"
              placeholder="E.g Project Defense, Assignment..."
              className="w-full border border-gray-300 h-[56px] tablet-min:h-[68px] laptop-min:h-[84px] px-4 tablet-min:px-5 laptop-min:px-6 pt-4 tablet-min:pt-5 pb-2 tablet-min:pb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-[14px] tablet-min:placeholder:text-[16px] placeholder-gray-400"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
            <label
              htmlFor="taskTitle"
              className="absolute left-4 -top-2.5 bg-white px-2 text-[14px] tablet-min:text-[18px] text-[#9C9C9C]"
            >
              Task Title
            </label>
          </div>

          {/* Description */}
          <div className="relative mt-8 tablet-min:mt-10 laptop-min:mt-16">
            <textarea
              id="taskDescription"
              name="taskDescription"
              placeholder="Briefly describe your task..."
              className="w-full border border-gray-300 h-[120px] tablet-min:h-[180px] laptop-min:h-[240px] px-4 tablet-min:px-5 laptop-min:px-6 pt-4 tablet-min:pt-5 pb-2 tablet-min:pb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-[14px] tablet-min:placeholder:text-[16px] placeholder-gray-400 resize-none"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
            />
            <label
              htmlFor="taskDescription"
              className="absolute left-4 -top-2.5 bg-white px-2 text-[14px] tablet-min:text-[18px] text-[#9C9C9C]"
            >
              Description
            </label>
          </div>

          {/* Priority */}
          <div className="relative mt-8 tablet-min:mt-10 laptop-min:mt-16">
            <select
              id="tags"
              name="tags"
              className="w-full border border-gray-300 h-[56px] tablet-min:h-[68px] laptop-min:h-[84px] px-4 tablet-min:px-5 laptop-min:px-6 pt-4 tablet-min:pt-5 pb-2 tablet-min:pb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-[14px] tablet-min:text-[16px] bg-white appearance-none"
              value={tags}
              onChange={(event) => setTags(event.target.value)}
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
              htmlFor="tags"
              className="absolute left-4 -top-2.5 bg-white px-2 text-[14px] tablet-min:text-[18px] text-[#9C9C9C]"
            >
              Priority
            </label>
            {/* Custom dropdown arrow */}
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 tablet-min:w-5 tablet-min:h-5 text-gray-400"
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

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-8 tablet-min:mt-10 laptop-min:mt-16 px-6 py-3 tablet-min:py-4 text-[16px] tablet-min:text-[20px] laptop-min:text-[25px] font-medium bg-[#974FD0] text-white rounded-[8px] flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:bg-[#7f3fb3]"
          >
            {isLoading && (
              <svg
                className="animate-spin h-5 w-5 tablet-min:h-6 tablet-min:w-6"
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
          className="text-[#974FD0] underline mt-6 tablet-min:mt-8 mb-10 text-center cursor-pointer text-[14px] tablet-min:text-[16px]"
          onClick={scrollToTop}
        >
          Back To Top
        </p>
      </div>
    </div>
  );
};

export default NewTask;
