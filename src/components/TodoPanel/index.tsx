import React, { useState } from "react";
import "./style.css";
import { Button } from "../Button";
import type { Todo } from "../../types.ts";

const DEFAULT_TODO = {
  name: "",
  description: "",
};

interface TodoPanelProps {
  addTodo: ({ name, description }: Omit<Todo, "isCompleted" | "id">) => void;
}

export const TodoPanel: React.FC<TodoPanelProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState(DEFAULT_TODO);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleOnClick = () => {
    addTodo({ name: todo.name, description: todo.description });
    setTodo(DEFAULT_TODO);
  };
  return (
    <div className="todo_panel_container">
      <div className="fields_container">
        <div className="field_container">
          <label htmlFor="name">
            <div className="field_title">Название задачи</div>
            <input
              type="text"
              id="name"
              name="name"
              value={todo.name}
              onChange={handleOnChange}
            />
          </label>
        </div>
        <div className="field_container">
          <label htmlFor="description">
            <div className="field_title">Описание</div>
            <input
              type="text"
              id="description"
              name="description"
              value={todo.description}
              onChange={handleOnChange}
            />
          </label>
        </div>
      </div>
      <div className="button_container">
        <Button color={"blue"} onClick={handleOnClick}>
          Добавить
        </Button>
      </div>
    </div>
  );
};
