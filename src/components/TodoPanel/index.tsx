import React, {useState} from 'react';
import './style.css';

const DEFAULT_TODO = {
    name: '',
    description: ''
};

export const TodoPanel: React.FC = () => {
    const [todo, setTodo] = useState(DEFAULT_TODO);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setTodo({...todo, [name]: value});
    };
    return (
        <div className="todo_panel_container">
            <div className="fields_container">
                <div className="field_container">
                    <label htmlFor="name">
                        <div>Название задачи</div>
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
                        <div>Описание</div>
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
            <div>
                <button className="button_container">Добавить</button>
            </div>

        </div>


    );
};