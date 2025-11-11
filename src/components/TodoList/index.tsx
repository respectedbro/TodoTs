import React from "react";

import type { Todo } from "../../types.ts";

import "../TodoList/style.css";
import { TodoItem } from "./TodoItem";
import { TodoPanel } from "../TodoPanel";

interface TodoListProps {
  todos: Todo[];
  todoIdForEdit: Todo["id"] | null;
  checkTodo: (id: Todo["id"]) => void;
  deleteTodo: (id: Todo["id"]) => void;
  selectTodoIdForEdit: (id: Todo["id"]) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  checkTodo,
  deleteTodo,
  selectTodoIdForEdit,
  todoIdForEdit,
}) => {
  return (
    <div>
      {todos.map((todo) => {
        if (todo.id === todoIdForEdit)
          return (
            <TodoPanel
              mode="edit"
              key={todo.id}
              editTodo={{ name: todo.name, description: todo.description }}
            />
          );
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
            selectTodoIdForEdit={selectTodoIdForEdit}
          />
        );
      })}
    </div>
  );
};
