import * as React from "react";
import { TodoListContext } from "../context/TodoListContext";
import Todo from "./Todo";

const TodoList: React.FC = () => {
  const { todos } = React.useContext(TodoListContext);

  return (
    <>
      {todos.length ? (
        <ul>
          {todos.map((todo) => {
            return <Todo todo={todo} key={todo.id} />;
          })}
        </ul>
      ) : (
        <div>No tasks</div>
      )}
    </>
  );
};

export default TodoList;
