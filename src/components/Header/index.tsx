import React from "react";

import "./style.css";
import { useTodo } from "../../contexts";

export const Header: React.FC = () => {
  const { todos } = useTodo();
  return (
    <div className="header_container">
      <div className="header_title">Количество задач: {todos.length}</div>
    </div>
  );
};
