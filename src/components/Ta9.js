import React from "react";
import { useState } from "react"; // Hook de estados funcionales
import { useEffect } from "react"; // Hook de efectos

function Counter() {
    const [counter, setCounter] = useState(0); // Estado counter con valor inicial 0

    useEffect(() => { 
            document.title = `Contador: ${counter}`;
        }, [counter]);

    const increment = () => {
        setCounter(counter + 1); // Incrementa el valor del estado counter en 1
    }

    const decrement = () => {
        if (counter > 0)
            setCounter(counter - 1);
    }

    const restart = () => {
        setCounter(0);
    }

    return (
        <div className="container">
            <div className="box">
                <label className="label">Contador: {counter}</label>
                <br />
                <button className="button is-primary m-2" onClick={decrement}>-</button>
                <button className="button is-primary m-2" onClick={restart}>
                    <span className="icon">
                        <i className="fa-solid fa-arrows-rotate"></i>
                    </span>
                </button>
                <button className="button is-primary m-2" onClick={increment}>+</button>
            </div>

        </div>
    )
}

export default Counter;
