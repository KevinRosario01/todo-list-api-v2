import { createTodo } from "@/services/createTodo";
import { deleteTodo } from "@/services/deleteTodo";
import { getTodos } from "@/services/getTodos";
import { create } from "zustand";

export const useTodoList = create((set, get) => ({
  todos: [],
  task: "",

  setTask: (newTask) => {
    set({ task: newTask });
  },

  loadTasks: async () => {
    const todos = await getTodos("kr")
    set({ todos });
  },

  addTask: async () => {
    const todo = await createTodo("kr", get().task)
    set((prev) => ({
      task: "",
      todos: [...prev.todos, todo],
    }));
  },

  deleteTask: async (index) => {
    const todo = get().todos[index];
    await deleteTodo(todo.id);
    set((prev) => ({
      todos: prev.todos.filter((_, i) => index !== i),
    }));
  },
}));