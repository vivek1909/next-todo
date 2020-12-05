import * as React from "react";
import { DeleteIcon, EditIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { TodoListContext } from "../context/TodoListContext";

export const Todo = ({ todo }) => {
  const { removeTodo, findItem, todoComplete } = React.useContext(
    TodoListContext
  );

  const handleDelete = () => {
    removeTodo(todo.id);
  };

  const handleTodoComplete = () => {
    todoComplete(todo.id);
  };

  return (
    <li className="flex list-none" data-testid="todo">
      <span className="m-5 cursor-pointer" onClick={handleTodoComplete}>
        {todo.active ? <CheckCircleIcon /> : <span>○</span>}
      </span>
      <span className="m-5" data-testid="title">
        {todo.title}
      </span>
      <DeleteIcon onClick={handleDelete} className="m-5 cursor-pointer" />
      <EditIcon
        onClick={() => findItem(todo.id)}
        className="m-5 cursor-pointer"
      />
    </li>
  );
};
