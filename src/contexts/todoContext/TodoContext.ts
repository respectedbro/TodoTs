import React from "react";
import type { Todo } from "../../types.ts";

export interface TodoContextProps {
  todos: Todo[];
  todoIdForEdit: Todo["id"] | null;
  addTodo: ({ name, description }: Omit<Todo, "isCompleted" | "id">) => void;
  changeTodo: ({ name, description }: Omit<Todo, "isCompleted" | "id">) => void;
  checkTodo: (id: Todo["id"]) => void;
  deleteTodo: (id: Todo["id"]) => void;
  selectTodoIdForEdit: (id: Todo["id"]) => void;
}

export const TodoContext = React.createContext<TodoContextProps>({
  todos: [],
  todoIdForEdit: null,
  addTodo: () => {},
  deleteTodo: () => {},
  changeTodo: () => {},
  checkTodo: () => {},
  selectTodoIdForEdit: () => {},
});
