import React from "react";

import "../TodoList/style.css";
import { useTodo } from "../../contexts";
import { TodoPanel } from "../TodoPanel";
import { TodoItem } from "./TodoItem";

export const TodoList: React.FC = () => {
  const { todos, todoIdForEdit, checkTodo, selectTodoIdForEdit, deleteTodo } =
    useTodo();

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
