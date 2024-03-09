import { useContext } from 'react';
import { createContext } from 'react';

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todoTitle: 'todo msg',
      completed: false,
    },
  ],
  addTodo: (todoTitle) => {},
  updateTodo: (id, todoTitle) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
