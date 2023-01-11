import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: updateTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);


    const [searchValue, setSearchValue] = React.useState('');

    let searchedTodos = [];

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();

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

        const newTodos = todos.filter((todo) => !toDelete.includes(todo))

        updateTodos(newTodos);
    }

    return (
        <TodoContext.Provider
            value={{
                loading,
                error,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodos,
                deleteTodos,
            }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }