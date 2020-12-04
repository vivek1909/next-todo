import * as React from "react";
import { v4 as uuid } from "uuid";
import { IContextModel } from "../types";

export const TodoListContext = React.createContext({} as IContextModel);

interface Props {
  children: React.ReactNode;
}

export const TodoListContextProvider = ({ children }: Props) => {
  const [todos, setTodos] = React.useState([]);
  const [editItem, setEditItem] = React.useState(null);

  const addTodo = (title: string): string => {
    const todo = {
      title,
      id: uuid(),
      active: false,
    };
    setTodos([...todos, todo]);

    return todo.id;
  };

  const removeTodo = (id: string): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearList = (): void => {
    setTodos([]);
  };

  const findItem = (id: string) => {
    const item = todos.find((todo) => todo.id === id);

    setEditItem(item);
  };

  const editTodo = (title: string, id: string) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { title, id } : todo
    );

    setTodos(newTodos);
    setEditItem(null);
  };

  const todoComplete = (id: string): void => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.active = !todo.active;
      }
      return todo;
    });

    setTodos(updateTodos);
  };

  return (
    <TodoListContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        clearList,
        findItem,
        editTodo,
        editItem,
        todoComplete,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
