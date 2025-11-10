import React, { useState } from "react";
import type { Todo } from "../../types.ts";
import { TodoContext } from "./TodoContext.ts";

const DEFAULT_TODO_LIST = [
  { id: 1, name: "task 1", description: "description 1", isCompleted: false },
  { id: 2, name: "task 2", description: "description 2", isCompleted: false },
  {
    id: 3,
    name: "task 3",
    description:
      "so long task description 3 so long task description so long task description so long task description so long task description",
    isCompleted: true,
  },
];

interface TodoProviderProps {
  children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState(DEFAULT_TODO_LIST);
  const [todoIdForEdit, setTodoIdForEdit] = useState<Todo["id"] | null>(null);

  const selectTodoIdForEdit = (id: Todo["id"]) => {
    setTodoIdForEdit(id);
  };

  const addTodo = ({ name, description }: Omit<Todo, "isCompleted" | "id">) => {
    setTodos([
      ...todos,
      {
        id: todos[todos.length - 1].id + 1,
        description,
        name,
        isCompleted: false,
      },
    ]);
  };

  const checkTodo = (id: Todo["id"]) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: Todo["id"]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const changeTodo = ({
    name,
    description,
  }: Omit<Todo, "id" | "isCompleted">) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoIdForEdit) {
          return { ...todo, name, description };
        }
        return todo;
      })
    );
    setTodoIdForEdit(null);
  };

  const value = React.useMemo(
    () => ({
      todoIdForEdit,
      todos,
      deleteTodo,
      changeTodo,
      addTodo,
      selectTodoIdForEdit,
      checkTodo,
    }),
    [
      todoIdForEdit,
      todos,
      deleteTodo,
      changeTodo,
      addTodo,
      selectTodoIdForEdit,
      checkTodo,
    ]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
