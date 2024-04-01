import React from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { Layers } from "lucide-react";

const App: React.FC = () => {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <section className="w-[380px] bg-[#f7f7f7] text-black rounded p-3">
        <h1 className="text-[21px] font-semibold border-b border-gray-200 pb-2 flex items-center gap-2">
          <Layers size={18} /> Task Management
        </h1>
        <TaskInput />
        <TaskList />
      </section>
    </main>
  );
};

export default App;
