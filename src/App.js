// import logo from './logo.svg';
// import './App.css';

import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

const defaultTodos = [
    { text: 'Brincar la cuerda', completed: false },
    { text: 'Tomar curso de EF', completed: false },
    { text: 'Terminar cursos de ReactJS', completed: false },
    { text: 'Nuevo ejemplo', completed: true }
]

function App() {

    const [todos, setTodos] = React.useState(defaultTodos)

    const [searchValue, setSearchValue] = React.useState('');

    let searchedTodos = [];

    if(!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText =  searchValue.toLowerCase();

            return todoText.includes(searchText);
        });
    }

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    // Completa un todo y cambia el estado (Todos los Todos)
    const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);

        const newTodos = [...todos];

        newTodos[todoIndex] = {
            text: todos[todoIndex].text,
            completed: true,
        }
        setTodos(newTodos)
    }

    return (
        <React.Fragment>
            <TodoCounter
             total={totalTodos}
             completed={completedTodos}
             />

            <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />
            
            <TodoList>
                {
                    searchedTodos.map(todo => (
                        <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodos(todo.text)}
                        />
                            
                    ))
                }
            </TodoList>

            <CreateTodoButton />
            
        </React.Fragment>
    );
}

export default App;
