import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/reducers/tasksSlice";
import { Plus } from "lucide-react";

const TaskInput: React.FC = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() !== "") {
      dispatch(addTask(task));
      setTask("");
    }
  };

  return (
    <div className="mt-4 flex items-center justify-center w-full border-b border-black">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        className="bg-transparent w-[72%] outline-none px-1"
      />
      <button
        className="w-fit rounded flex items-center gap-1 bg-black text-white p-1 px-2"
        onClick={handleAddTask}
      >
        <Plus size={16} /> Add Task
      </button>
    </div>
  );
};

export default TaskInput;
