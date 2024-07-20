"use client";
import { createTodo } from "@/services/createTodo";
import { deleteTodo } from "@/services/deleteTodo";
import { getTodos } from "@/services/getTodos";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useTodoList } from "./useTodoList";


export function TodoList() {
  const todoList = useTodoList();


  const handleEnter = (ev) => {
    if (ev.key === "Enter") {
      todoList.addTask();
    }
  };

  useEffect(() => {
    todoList.loadTasks();
  }, []);

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="relative w-full max-w-md">
        <h1 className="text-6xl text-center text-pink-200 mb-8">todos</h1>
        <div className="relative bg-white shadow-lg rounded-lg p-6 z-[0]">
          <div className="absolute bottom-[-3px] left-0 w-full h-full bg-white shadow-lg rounded-lg z-[-1]"></div>
          <div className="absolute bottom-[-6px] left-0 w-full h-full bg-white shadow-lg rounded-lg z-[-2]"></div>
          <div className="absolute bottom-[-9px] left-0 w-full h-full bg-white shadow-lg rounded-lg z-[-3]"></div>

          <input
            className="w-full px-4 py-2 text-xl border-b border-gray-300 focus:outline-none focus:border-pink-500"
            type="text"
            placeholder="Enter Task"
            value={todoList.task}
            onChange={(ev) => todoList.setTask(ev.target.value)}
            onKeyDown={handleEnter}
          />
          <ul className="mt-6 space-y-2">
          {todoList.isLoading && <div>Loading todos</div>}
            {todoList.todos.length === 0 ? (
              <li className="text-gray-500 text-center">
                No tasks, add a task
              </li>
            ) : (
              todoList.todos.map((todo, index) => (
                <li
                  key={todo.id}
                  className="flex justify-between items-center p-2 border-b border-gray-200 group"
                >
                  <span>{todo.label}</span>
                  <button
                    onClick={() => todoList.deleteTask(index)}
                    className="text-gray-400 hover:text-red-600 focus:outline-none opacity-0 group-hover:opacity-100"
                  >
                    &times;
                  </button>
                </li>
              ))
            )}
          </ul>
          <div className="mt-4 text-gray-600">
            {todoList.todos.length > 0 ? (
              <span>
                {todoList.todos.length} {todoList.todos.length === 1 ? "item" : "items"} left
              </span>
            ) : (
              <span>No items left</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
