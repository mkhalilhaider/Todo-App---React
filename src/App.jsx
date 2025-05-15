import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem, CreatedBy } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, isComplete: !prevTodo.isComplete }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        deleteTodo,
        updateTodo,
        toggleCompleted,
      }}
    >
      <div className="bg-gradient-to-br from-indigo-900 via-purple-800 to-purple-900 min-h-screen py-10 px-4">
        <div className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-md shadow-xl rounded-lg p-6 text-white">
          <h1 className="text-3xl font-bold text-center mb-6">
            📝 Your Todo List
          </h1>

          <div className="mb-6">
            <TodoForm />
          </div>

          <div className="space-y-3">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
            <CreatedBy/>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
