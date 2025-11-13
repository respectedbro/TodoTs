import { Header } from "./components/Header";
import { TodoPanel } from "./components/TodoPanel";

import "./App.css";
import { TodoList } from "./components/TodoList";
import { TodoProvider } from "./contexts";

function App() {
  return (
    <TodoProvider>
      <div className="app_container">
        <div className="container">
          <Header />
          <TodoPanel mode="add" />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
