import { Center, Heading } from "@chakra-ui/react";
import * as React from "react";
import { TodoListContext } from "../context/TodoListContext";
import PrimaryButton from "../components/Button";
import PrimaryInput from "../components/Input";

const TodoForm = () => {
  const { addTodo, clearList, editTodo, editItem } = React.useContext(
    TodoListContext
  );
  const [title, setTitle] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editItem) {
      addTodo(title);
      setTitle("");
    } else {
      editTodo(title, editItem.id);
    }
  };

  React.useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <>
      <Heading as="h1" m={10} textAlign="center">
        AffordMed Todo
      </Heading>
      <Center>
        <form onSubmit={handleSubmit}>
          <PrimaryInput
            value={title}
            w="auto"
            placeholder="enter your todo"
            onChange={handleChange}
          />
          <>
            <PrimaryButton name="Add" type="submit" />
            <PrimaryButton name="Clear" onClick={clearList} />
          </>
        </form>
      </Center>
    </>
  );
};

export default TodoForm;
