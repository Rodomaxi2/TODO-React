import React from "react";

function useLocalStorage(itemName, initialState) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialState);

    React.useEffect(() => {
        setTimeout(() => {
            try{
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialState));
                    parsedItem = [];
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setLoading(false);
            } catch(error) {
                setError(error)
            }
            
        }, 1000);
    });


    // Guardar el estado en localStorage
    const saveItem = (newItem) => {
        try{
            const stringItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringItem);
            setItem(newItem);
        } catch(error){
            setError(error);
        }
        
    };
    
    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage };