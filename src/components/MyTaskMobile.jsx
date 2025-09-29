import React from "react";
import head from "../assets/head image.png";
import task from "../assets/Task duty.png";
import plus from "../assets/Vector plus.png";
import edit from "../assets/edit.png";
import del from "../assets/delete.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const MyTaskMobile = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const getTaskApi = await fetch(
        "https://task-manager-backend-hyt8.onrender.com/api/tasks"
      );

      const taskB = await getTaskApi.json();
      console.log(taskB);
      setTasks(taskB);
    } catch (error) {
      console.log("I MADE A MISTAKE");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(
        `https://task-manager-backend-hyt8.onrender.com/api/tasks/${id}`,
        {
          method: "DELETE",
        }
      );
      fetchTasks();
      toast.success("Task Deleted Successfully!", { duration: 5000 });
    } catch (error) {
      console.error(`Failed to delete`, error);
    }
  };

  return (
    <div>
      <div className="block md:hidden">
        <nav className="flex justify-between px-4 py-4 border-b-[0.5px] border-[#B8B6B6]">
          <img
            src={task}
            alt=""
            onClick={() => {
              navigate("/");
            }}
            className="h-[32px] mt-2 cursor-pointer"
          />

          <div className="flex gap-4">
            <Link className="font-medium text-[14px] text-[#292929] mt-3">
              New Task
            </Link>

            <img src={head} alt="" className="w-[32px] h-[32px]" />
          </div>
        </nav>

        <div className="flex justify-between px-4 mt-6">
          <h4 className="text-[28px] font-medium leading-[100%] text-[#292929]">
            My Tasks
          </h4>

          <div className="flex gap-2">
            <Link to="/newtask">
              <img src={plus} alt="" className="w-[14px] h-[14px] mt-1" />
            </Link>

            <Link
              to="/newtask"
              className="text-[#974FD0] font-medium text-[16px]"
            >
              Add New Task
            </Link>
          </div>
        </div>

        {tasks.map((task) => {
          return (
            <div
              key={task._id}
              className="border-[0.5px] border-[#B8B6B6] mt-6 rounded-[8px] w-[343px] min-h-[180px] mx-auto"
            >
              <div className="flex justify-between mt-4 border-[#B8B6B6] max-w-[320px] mx-auto border-b-[0.5px] pb-2">
                <h5
                  className={`font-normal mt-2 text-[16px] ${
                    task.tags === "Urgent"
                      ? "text-red-500"
                      : task.tags === "Important"
                      ? "text-green-500"
                      : ""
                  }`}
                >
                  {task.tags}
                </h5>

                <div className="flex gap-3 mb-2">
                  <Link
                    to={`/edittask/${task._id}`}
                    className="bg-[#974FD0] rounded-[6px] px-[12px] py-[6px] flex gap-[6px]"
                  >
                    <img src={edit} alt="" className="w-[14px] h-[14px]" />
                    <p className="text-[#FAF9FB] font-medium text-[12px]">
                      Edit
                    </p>
                  </Link>

                  <div className="flex bg-[#FFFFFF] border border-[#974FD0] text-[#974FD0] rounded-[6px] px-[12px] py-[6px] gap-[6px]">
                    <img src={del} alt="" className="w-[14px] h-[14px]" />
                    <button
                      onClick={() => {
                        handleDelete(task._id);
                      }}
                      className="font-medium text-[12px]"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>

              <div className="mx-3 mt-3 pb-4">
                <h3 className="font-normal text-[20px] text-[#292929] mb-2">
                  {task.title}
                </h3>
                <p className="text-[14px] font-normal text-[#737171] line-clamp-3">
                  {task.description}
                </p>
              </div>
            </div>
          );
        })}

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

export default MyTaskMobile;
