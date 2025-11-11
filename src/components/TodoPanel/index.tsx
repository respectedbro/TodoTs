import React, { useState } from "react";
import "./style.css";
import { Button } from "../Button";
import type { Todo } from "../../types.ts";
import { useTodo } from "../../contexts";

const DEFAULT_TODO = {
  name: "",
  description: "",
};

interface AddTodoPanelProps {
  mode: "add";
}

interface EditTodoPanelProps {
  mode: "edit";
  editTodo: Omit<Todo, "id" | "isCompleted">;
}

type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps;

export const TodoPanel: React.FC<TodoPanelProps> = (props) => {
  const { changeTodo, addTodo } = useTodo();

  const isEdit = props.mode === "edit";

  const [todo, setTodo] = useState(isEdit ? props.editTodo : DEFAULT_TODO);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleOnClick = () => {
    const todoItem = { name: todo.name, description: todo.description };
    if (isEdit) {
      return changeTodo(todoItem);
    }

    addTodo(todoItem);
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
        {!isEdit && (
          <Button color={"blue"} onClick={handleOnClick}>
            Добавить
          </Button>
        )}
        {isEdit && (
          <Button color={"orange"} onClick={handleOnClick}>
            Редактировать
          </Button>
        )}
      </div>
    </div>
  );
};
