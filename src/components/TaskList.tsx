import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/index";
import { deleteTask, toggleTask } from "../store/reducers/tasksSlice";
import { X } from "lucide-react";

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  const handleToggleTask = (id: string) => {
    dispatch(toggleTask(id));
  };

  return (
    <div className="mt-6 min-h-[360px] max-h-[360px] overflow-y-auto">
      <ul className="flex flex-col gap- items-center">
        {tasks?.map((task) => (
          <li
            key={task.id}
            className="flex items-center w-full gap-2 border-b p-1"
          >
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
              />
              <span className="checkmark"></span>
            </label>
            <div
              className={`flex w-full items-center justify-between text-[17px] ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {task.title}
              <button onClick={() => handleDeleteTask(task.id)}>
                <X size={16} className="text-red-500" />
              </button>
            </div>
          </li>
        ))}
      </ul>
      {tasks.length <= 0 && (
        <div className="text-center text-gray-600 mt-36 ">
          No tasks available
        </div>
      )}
    </div>
  );
};

export default TaskList;
