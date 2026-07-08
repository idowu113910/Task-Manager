import React, { useEffect, useState } from "react";
import plus from "../assets/Vector plus.png";
import { Link, useNavigate } from "react-router-dom";
import head from "../assets/head image.png";
import task from "../assets/Task duty.png";
import edit from "../assets/edit.png";
import del from "../assets/delete.png";
import { toast } from "react-hot-toast";
import MyTaskMobile from "../components/MyTaskMobile";

const MyTask = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const getTaskApi = await fetch(
        "https://task-manager-backend-hyt8.onrender.com/api/tasks",
      );

      const taskB = await getTaskApi.json();
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
        },
      );
      fetchTasks();
      toast.success("Task Deleted Successfully!", { duration: 5000 });
    } catch (error) {
      console.error(`Failed to delete`, error);
    }
  };

  return (
    <div>
      {/* Tablet and up — fluid responsive version, replaces the old fixed-pixel desktop-only block */}
      <div className="hidden tablet-min:block w-full min-h-dvh bg-white overflow-x-hidden">
        <nav className="flex items-center justify-between px-6 py-4 laptop-min:px-16 desktop:px-40 desktop:py-5 border-b-[0.5px] border-[#B8B6B6]">
          <img
            src={task}
            alt=""
            onClick={() => navigate("/")}
            className="h-[32px] laptop-min:h-[36px] desktop:h-[41px] cursor-pointer"
          />

          <div className="flex items-center gap-4 laptop-min:gap-6 desktop:gap-8">
            <Link
              to="/newtask"
              className="font-medium text-[14px] laptop-min:text-[16px] desktop:text-[18px] text-[#292929]"
            >
              New Task
            </Link>

            <img
              src={head}
              alt=""
              className="w-[32px] h-[32px] laptop-min:w-auto laptop-min:h-auto rounded-full object-cover"
            />
          </div>
        </nav>

        <div className="mx-auto w-full max-w-[1150px] px-6 laptop-min:px-10 desktop:px-0">
          <div className="flex flex-col tablet-min:flex-row items-start tablet-min:items-center justify-between gap-4 mt-8 laptop-min:mt-10">
            <h4 className="text-[28px] laptop-min:text-[36px] desktop:text-[45px] font-medium leading-[100%] text-[#292929]">
              My Tasks
            </h4>

            <div className="flex items-center gap-3">
              <Link to="/newtask">
                <img
                  src={plus}
                  alt=""
                  className="w-[16px] h-[16px] laptop-min:w-[18px] laptop-min:h-[18px]"
                />
              </Link>

              <Link
                to="/newtask"
                className="text-[#974FD0] font-medium text-[16px] laptop-min:text-[20px] desktop:text-[24px]"
              >
                Add New Task
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-8 laptop-min:mt-10 mb-10">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="border-[0.5px] border-[#B8B6B6] rounded-[10px] w-full min-h-[220px] laptop-min:min-h-[250px] pb-6"
              >
                <div className="flex flex-col tablet-min:flex-row justify-between gap-3 pt-6 laptop-min:pt-8 px-4 laptop-min:px-6 mx-auto border-b-[0.5px] border-[#B8B6B6] pb-3">
                  <h5
                    className={`font-normal text-[16px] laptop-min:text-[20px] ${
                      task.tags === "Urgent"
                        ? "text-red-500"
                        : task.tags === "Important"
                        ? "text-green-500"
                        : ""
                    }`}
                  >
                    {task.tags}
                  </h5>

                  <div className="flex gap-3 laptop-min:gap-8">
                    <Link
                      to={`/edittask/${task._id}`}
                      className="bg-[#974FD0] rounded-[8px] px-4 py-2 laptop-min:px-[20px] laptop-min:py-[10px] flex items-center gap-2 laptop-min:gap-[10px]"
                    >
                      <img
                        src={edit}
                        alt=""
                        className="w-[16px] h-[16px] laptop-min:w-auto laptop-min:h-auto"
                      />
                      <p className="text-[#FAF9FB] font-medium text-[14px] laptop-min:text-[16px]">
                        Edit
                      </p>
                    </Link>

                    <div className="flex items-center bg-white border border-[#974FD0] text-[#974FD0] rounded-[8px] px-4 py-2 laptop-min:px-[20px] laptop-min:py-[10px] gap-2 laptop-min:gap-[10px]">
                      <img
                        src={del}
                        alt=""
                        className="w-[16px] h-[16px] laptop-min:w-auto laptop-min:h-auto"
                      />
                      <button
                        onClick={() => handleDelete(task._id)}
                        className="font-medium text-[14px] laptop-min:text-[16px]"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

                <div className="px-4 laptop-min:px-6 mt-4">
                  <h3 className="font-normal text-[18px] laptop-min:text-[25px] text-[#292929]">
                    {task.title}
                  </h3>
                  <p className="text-[14px] laptop-min:text-[18px] font-normal text-[#737171]">
                    {task.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-[#974FD0] underline mb-10 text-center cursor-pointer"
            onClick={scrollToTop}
          >
            Back To Top
          </p>
        </div>
      </div>

      {/* Below tablet-min (mobile) — dedicated mobile component */}
      <div className="tablet-min:hidden">
        <MyTaskMobile />
      </div>
    </div>
  );
};

export default MyTask;
