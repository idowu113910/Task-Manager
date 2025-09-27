import React from "react";
import { useState } from "react";
import arr from "../assets/back arrow.png";
import { Link, useNavigate } from "react-router-dom";
import task from "../assets/Task duty.png";
import head from "../assets/head image.png";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditTask = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // if your route is /edittask/:id

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    // fetch task to prefill the form
    async function fetchTask() {
      try {
        const res = await axios.get(
          `https://task-manager-backend-hyt8.onrender.com/api/tasks/${id}`
        );
        setTitle(res.data.title || "");
        setDescription(res.data.description || "");
        setTags(res.data.tags || "");
      } catch (err) {
        console.error("Fetch task error:", err);
      }
    }
    if (id) fetchTask();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `https://task-manager-backend-hyt8.onrender.com/api/tasks/${id}`,
        {
          title: title.trim(),
          description: description.trim(),
          tags: tags || "",
        }
      );

      console.log("Success:", response.data);
      navigate("/mytask");
    } catch (err) {
      console.log("Error details:", err.response?.data || err.message);
      alert("Update failed. Check console for details.");
    }
  };

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
          alt=""
          onClick={() => {
            navigate("/mytask");
          }}
          className="w-[60px] h-[60px] mt-1"
        />

        <h4 className=" text-[40px] mt-1 font-medium">Edit Task</h4>
      </div>

      <form onSubmit={handleSubmit} action="">
        <div className="w-[1030px]  mx-auto relative mt-16">
          <input
            id="taskTitle"
            name="taskTitle"
            type="text"
            placeholder="E.g Project Defense, Assignment..."
            className="w-full border border-gray-300 h-[84px] px-4 pt-5 pb-3 pl-6 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:text-[16px] placeholder-gray-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            <option value="Urgent">Urgent</option>
            <option value="Important">Important</option>
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
          className="text-[25px] ml-40 font-medium bg-[#974FD0] text-white w-[1040px] mx-auto text-center mt-10 rounded-[8px] py-[10px] px-[25px]"
        >
          Done
        </button>
      </form>

      <p
        className="text-[#974FD0] underline mt-8 text-center cursor-pointer"
        onClick={scrollToTop}
      >
        Back To Top
      </p>
    </div>
  );
};

export default EditTask;
