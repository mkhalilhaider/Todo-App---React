import React, { useState } from "react";
import { useTodo } from "../contexts";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoInputValue, setTodoInputValue] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleCompleted } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoInputValue });
    setIsTodoEditable(false);
  };

  const isCompleted = () => {
    toggleCompleted(todo.id);
  };

  return (
    <div
      className={`flex items-center justify-between gap-2 bg-white text-black rounded-lg p-3 shadow-md border ${
        todo.isComplete ? "bg-green-100 line-through opacity-70" : ""
      }`}
    >
      <div className="flex items-center gap-3 w-full">
        <input
          type="checkbox"
          className="w-5 h-5 accent-green-600"
          checked={todo.toggleCompleted}
          onChange={isCompleted}
        />
        <input
          type="text"
          className={`w-full bg-transparent outline-none ${
            isTodoEditable
              ? "border border-gray-300 rounded-md px-2 py-1"
              : "cursor-default"
          }`}
          value={todoInputValue}
          onChange={(e) => setTodoInputValue(e.target.value)}
          readOnly={!isTodoEditable}
        />
      </div>
      <div className="flex items-center gap-2">
        <button
          className="text-sm bg-blue-100 hover:bg-blue-200 text-blue-800 px-2 py-1 rounded-md disabled:opacity-40"
          onClick={() => {
            if (todo.isComplete) return;
            isTodoEditable ? editTodo() : setIsTodoEditable(true);
          }}
          disabled={todo.isComplete}
        >
          {isTodoEditable ? "Save" : "Edit"}
        </button>
        <button
          className="text-sm bg-red-100 hover:bg-red-200 text-red-700 px-2 py-1 rounded-md"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
