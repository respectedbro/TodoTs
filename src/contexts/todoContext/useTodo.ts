import React from "react";
import { TodoContext } from "./TodoContext.ts";

export const useTodo = () => React.useContext(TodoContext);
