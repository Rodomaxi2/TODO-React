import React from "react";
import { TodoContext } from "../../TodoContext.js";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";

function AppUI() {
    return (
        <React.Fragment>
            <TodoCounter />

            <TodoSearch />
            
            <TodoContext.Consumer>
                {({ error, loading, searchedTodos, completeTodos, deleteTodos }) => {
                    (
                        <TodoList>

                            {error && <p>Algo salio mal</p>}
                            {loading && <p>La aplicacion esta cargando</p>}
                            {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}

                            {
                                searchedTodos.map(todo => (
                                    <TodoItem
                                        key={todo.text}
                                        text={todo.text}
                                        completed={todo.completed}
                                        onComplete={() => completeTodos(todo.text)}
                                        onDelete={() => deleteTodos(todo.text)}
                                    />

                                ))
                            }
                        </TodoList>
                    )
                }}
            </TodoContext.Consumer>

            <CreateTodoButton />
            
        </React.Fragment>
    );
}

export {AppUI};