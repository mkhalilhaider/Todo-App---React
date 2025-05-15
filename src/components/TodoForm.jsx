import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todoInput, setTodoInput] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todoInput.trim()) return;
    addTodo({ todo: todoInput, isCompleted: false });
    setTodoInput("");
  };

  return (
    <form onSubmit={add} className="flex gap-2">
      <input
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        type="text"
        placeholder="What's on your mind?"
        className="w-full px-4 py-2 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400"
      />
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
