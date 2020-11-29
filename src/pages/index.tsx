import TodoListContextProvider from "../context/TodoListContext";
import TodoList from "../containers/TodoList";
import TodoForm from "../containers/TodoForm";

const HomePage = () => {
  return (
    <TodoListContextProvider>
      <TodoForm />
      <TodoList />
    </TodoListContextProvider>
  );
};

export default HomePage;
