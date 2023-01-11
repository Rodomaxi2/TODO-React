import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../../TodoContext";

// const defaultTodos = [
//     { text: 'Brincar la cuerda', completed: false },
//     { text: 'Tomar curso de EF', completed: false },
//     { text: 'Terminar cursos de ReactJS', completed: false },
//     { text: 'Nuevo ejemplo', completed: true }
// ]

function App() {
    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    );
}

export default App;
