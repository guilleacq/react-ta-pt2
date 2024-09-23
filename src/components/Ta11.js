import React, { useState, useEffect } from "react";

function Ta11() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        // Esto ejecuta setInterval cada 1000ms (1 segundo)
        const interval = setInterval(() => {
            setContador((prevContador) => prevContador + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <h2 className="subtitle"><strong>Contador: </strong> {contador}</h2>
        </div>
    )
}

export default Ta11;