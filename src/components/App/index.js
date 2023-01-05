import React from "react";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//     { text: 'Brincar la cuerda', completed: false },
//     { text: 'Tomar curso de EF', completed: false },
//     { text: 'Terminar cursos de ReactJS', completed: false },
//     { text: 'Nuevo ejemplo', completed: true }
// ]

function useLocalStorage(itemName, initialState) {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;

    if(!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialState));
        parsedItem = [];
    } else {
        parsedItem = JSON.parse(localStorageItem);
    }

    const [item, setItem] = React.useState(parsedItem)

    // Guardar el estado en localStorage
    const saveItem = (newItem) => {
        const stringItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringItem);
        setItem(newItem);
    };
    
    return [
        item,
        saveItem,
    ];
}


function App() {

    const [todos, updateTodos] = useLocalStorage('TODOS_V1', []);


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
        updateTodos(newTodos);
    }

    const deleteTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const toDelete = [todos[todoIndex]];

        const newTodos = todos.filter( (todo) => !toDelete.includes(todo))

        updateTodos(newTodos);
    }

    return (
        <AppUI
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        completeTodos={completeTodos}
        deleteTodos={deleteTodos}
        />
    );
}

export default App;
