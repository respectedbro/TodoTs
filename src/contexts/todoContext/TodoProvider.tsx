import React, { useCallback, useMemo, useState } from "react";
import type { Todo } from "../../types.ts";
import { TodoContext } from "./TodoContext.ts";

const DEFAULT_TODO_LIST = [
  {
    id: 1,
    name: "задача 1",
    description: "Lorem ipsum dolor sit amet",
    isCompleted: false,
  },
  {
    id: 2,
    name: "задача 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    isCompleted: false,
  },
  {
    id: 3,
    name: "задача 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi assumenda dolore laudantium sequi vitae!",
    isCompleted: true,
  },
];

interface TodoProviderProps {
  children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState(DEFAULT_TODO_LIST);
  const [todoIdForEdit, setTodoIdForEdit] = useState<Todo["id"] | null>(null);

  const selectTodoIdForEdit = useCallback((id: Todo["id"]) => {
    setTodoIdForEdit(id);
  }, []);

  const addTodo = useCallback(
    ({ name, description }: Omit<Todo, "isCompleted" | "id">) => {
      setTodos((prevTodos) => [
        ...prevTodos,
        {
          id: prevTodos.length > 0 ? prevTodos[prevTodos.length - 1].id + 1 : 1,
          description,
          name,
          isCompleted: false,
        },
      ]);
    },
    []
  );
  const checkTodo = useCallback((id: Todo["id"]) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  }, []);

  const deleteTodo = useCallback((id: Todo["id"]) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const changeTodo = useCallback(
    ({ name, description }: Omit<Todo, "id" | "isCompleted">) => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) => {
          if (todo.id === todoIdForEdit) {
            return { ...todo, name, description };
          }
          return todo;
        })
      );
      setTodoIdForEdit(null);
    },
    [todoIdForEdit]
  );

  const value = useMemo(
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
