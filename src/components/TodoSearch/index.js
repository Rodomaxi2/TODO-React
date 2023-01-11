import React from "react";
import { TodoContext } from "../../TodoContext";
import './TodoSearch.css'

function TodoSearch() {

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    return(
        <input className="TodoSearch"
        placeholder="Correr" 
        value={searchValue}
        onChange={onSearchValueChange}
        />
    )
}

export { TodoSearch };