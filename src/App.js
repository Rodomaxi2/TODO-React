// import logo from './logo.svg';
// import './App.css';

import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

const todos = [
    { text: 'Brincar la cuerda', completed: false },
    { text: 'Tomar curso de EF', completed: false },
    { text: 'Terminar cursos de ReactJS', completed: false },
    { text: 'Nuevo ejemplo', completed: true }
]

function App() {
    return (
        <React.Fragment>
            <TodoCounter />

            <TodoSearch />
            
            <TodoList>
                {
                    todos.map(todo => (
                        <TodoItem key={todo.text}
                        text={todo.text}
                        completed={todo.completed}/>
                    ))
                }
            </TodoList>

            <CreateTodoButton />
            
        </React.Fragment>
    );
}

export default App;
