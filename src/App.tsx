import { useState } from "react";

import { Header } from "./components/Header";
import { TodoPanel } from "./components/TodoPanel";

import "./App.css";
import type { Todo } from "./types.ts";
import { TodoList } from "./components/TodoList";

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

function App() {
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

  return (
    <div className="app_container">
      <div className="container">
        <Header todoCount={todos.length} />
        <TodoPanel mode="add" addTodo={addTodo} />
        <TodoList
          todos={todos}
          checkTodo={checkTodo}
          deleteTodo={deleteTodo}
          selectTodoIdForEdit={selectTodoIdForEdit}
          todoIdForEdit={todoIdForEdit}
          changeTodo={changeTodo}
        />
      </div>
    </div>
  );
}

export default App;
