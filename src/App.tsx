import {useState} from 'react';

import {Header} from './components/Header';
import {TodoPanel} from './components/TodoPanel';

import './App.css';

const DEFAULT_TODO_LIST = [
    {id: 1, name: 'task 1', description: 'description 1', checked: false},
    {id: 2, name: 'task 2', description: 'description 2', checked: false},
    {
        id: 3,
        name: 'task 3',
        description:
            'so long task description 3 so long task description so long task description so long task description so long task description',
        checked: true
    }
];

function App() {
    const [todos, setTodos] = useState(DEFAULT_TODO_LIST);
    console.log('todos, setTodos', todos, setTodos);
    return (
        <div className="app_container">
            <div className="container">
                <Header todoCount={todos.length}/>
                <TodoPanel/>
            </div>
        </div>
    );
}

export default App;
