import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../types";

const initialState: Task[] = [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    loadTasks(_, action: PayloadAction<Task[]>) {
      return action.payload;
    },
    addTask: {
      reducer(state, action: PayloadAction<Task>) {
        state.push(action.payload);
      },
      prepare(title: string) {
        return {
          payload: { id: String(Math.random()), title, completed: false },
        };
      },
    },
    toggleTask(state, action: PayloadAction<string>) {
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
    },

    deleteTask(state, action: PayloadAction<string>) {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { loadTasks, addTask, toggleTask, deleteTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
