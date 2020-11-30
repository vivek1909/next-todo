export interface ITodo {
  id: string;
  title: string;
  active: boolean;
}

export interface IContextModel {
  todos: ITodo[];
  addTodo: (title: string) => void;
  removeTodo: (id: string) => void;
  clearList: () => void;
  findItem: (id: string) => void;
  editTodo: (title: string, id: string) => void;
  editItem: ITodo;
  todoComplete: (id: string) => void;
}
