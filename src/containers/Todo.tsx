import * as React from "react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { TodoListContext } from "../context/TodoListContext";

const Todo = ({ todo }) => {
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
    <li style={{ listStyle: "none" }} className="flex">
      <span className="m-5 cursor-pointer" onClick={handleTodoComplete}>
        {todo.active ? <span>✔</span> : <span>○</span>}
      </span>
      <span className="m-5">{todo.title}</span>
      <DeleteIcon onClick={handleDelete} className="m-5 cursor-pointer" />
      <EditIcon
        onClick={() => findItem(todo.id)}
        className="m-5 cursor-pointer"
      />
    </li>
  );
};

export default Todo;