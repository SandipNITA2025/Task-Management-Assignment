import { configureStore } from "@reduxjs/toolkit";
import tasksReducer, { loadTasks } from "./reducers/tasksSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

const tasksFromLocalStorage = localStorage.getItem("tasks");
if (tasksFromLocalStorage) {
  store.dispatch(loadTasks(JSON.parse(tasksFromLocalStorage)));
}

store.subscribe(() => {
  localStorage.setItem("tasks", JSON.stringify(store.getState().tasks));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
