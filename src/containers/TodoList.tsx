import { Center } from "@chakra-ui/react";
import * as React from "react";
import { TodoListContext } from "../context/TodoListContext";
import { Todo } from "./Todo";

export const TodoList: React.FC = () => {
  const { todos } = React.useContext(TodoListContext);

  return (
    <Center className="m-10 flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800 shadow-2xl">
      {todos.length ? (
        <ul>
          {todos.map((todo) => {
            return <Todo todo={todo} key={todo.id} />;
          })}
        </ul>
      ) : (
        <div>No tasks</div>
      )}
    </Center>
  );
};
