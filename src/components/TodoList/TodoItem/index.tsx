import React from "react";
import type { Todo } from "../../../types.ts";
import "../TodoItem/style.css";
import { Button } from "../../Button";

interface TodoItemProps {
  todo: Todo;
  checkTodo: (id: Todo["id"]) => void;
  deleteTodo: (id: Todo["id"]) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  checkTodo,
  deleteTodo,
}) => {
  return (
    <div className="todo_item_container">
      <div>
        <div
          className="todo_item_title"
          style={{
            opacity: todo.isCompleted ? 0.5 : 1,
            textDecoration: todo.isCompleted ? "line-through" : "none",
          }}
          onClick={() => checkTodo(todo.id)}
        >
          {todo.name}
        </div>
        <div
          className="todo_item_description"
          style={{
            opacity: todo.isCompleted ? 0.5 : 1,
          }}
        >
          {todo.description}
        </div>
      </div>
      <div className="todo_item_button_container">
        <Button color="orange">Редактировать</Button>
        <Button color="red" onClick={() => deleteTodo(todo.id)}>
          Удалить
        </Button>
      </div>
    </div>
  );
};
