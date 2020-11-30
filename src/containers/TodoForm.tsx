import * as React from "react";
import { Center, Heading } from "@chakra-ui/react";
import { TodoListContext } from "../context/TodoListContext";
import { PrimaryButton } from "../components/PrimaryButton";
import { PrimaryInput } from "../components/PrimaryInput";

export const TodoForm = () => {
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
            <PrimaryButton name="Add" type="submit" className="bg-blue-500" />
            <PrimaryButton name="Clear" onClick={clearList} />
          </>
        </form>
      </Center>
    </>
  );
};
