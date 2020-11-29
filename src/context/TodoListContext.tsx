import * as React from "react";
import { v4 as uuid } from "uuid";
import { IContextModel } from "../interface";

export const TodoListContext = React.createContext({} as IContextModel);

interface Props {
  children: React.ReactNode;
}

export const TodoListContextProvider = (props: Props) => {
  const [todos, setTodos] = React.useState([]);
  const [editItem, setEditItem] = React.useState(null);

  const addTodo = (title: string): void => {
    setTodos([...todos, { title, id: uuid(), active: false }]);
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
    const newTodos = [...todos];
    newTodos.find((todo) => todo.id === id)!.active = !newTodos.find(
      (todo) => todo.id === id
    ).active;
    setTodos(newTodos);
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
      {props.children}
    </TodoListContext.Provider>
  );
};
