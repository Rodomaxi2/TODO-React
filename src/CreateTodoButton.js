import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton() {

    const onClickButton = (mensaje) => {
        alert(mensaje);
    }

    return(
        <button className="CreateTodoButton"
        onClick={ () => onClickButton('Diste click')}>
            +
        </button>
    )
}

export { CreateTodoButton };