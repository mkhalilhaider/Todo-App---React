import { createContext, useContext } from "react";

const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "tood msg",
      isComplete: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleCompleted: (isComplete) => {},
});

const TodoProvider = TodoContext.Provider;

const useTodo = () => useContext(TodoContext);

export { TodoContext, TodoProvider, useTodo };
