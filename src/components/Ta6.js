import React, { useState } from "react";
import "./Ta6.css";

function Ta6() {
    const [tareas, setTareas] = useState([]);
    const [tareaActual, setTareaActual] = useState("");
    const [tareaEditando, setTareaEditando] = useState(null);
    const [tareaEditada, setTareaEditada] = useState(""); 

    const agregarTarea = () => {
        if (tareaActual.trim() === "") return;
        setTareas([...tareas, tareaActual]);
        setTareaActual("");
    };

    const eliminarTarea = (index) => {
        const nuevasTareas = tareas.filter((_, i) => i !== index);
        setTareas(nuevasTareas);
    };

    const activarEdicion = (index, tarea) => {
        setTareaEditando(index);
        setTareaEditada(tarea);
    };

    const guardarTareaEditada = (index) => {
        const nuevasTareas = tareas.map((tarea, i) => (i === index ? tareaEditada : tarea));
        setTareas(nuevasTareas);
        setTareaEditando(null);
    };

    return (
        <div className="container">
            <div className="box">
                <h1 className="title">TA6 - TodoList</h1>
                <div className="field">
                    <label className="label">Tarea</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={tareaActual}
                            onChange={(e) => setTareaActual(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    agregarTarea();
                                }
                            }}
                            placeholder="Ingrese una tarea..."
                        />
                    </div>
                    <div className="control mt-6">
                        <button className="button is-primary" onClick={agregarTarea}>
                            Agregar
                        </button>
                    </div>

                    {/* Renderización de las tareas */}
                    <div className="mt-6">
                        <h2 className="subtitle">Lista de Tareas</h2>
                        <ul>
                            {tareas.map((tarea, index) => (
                                <li key={index} className="editable deletable mt-2 p-3 is-flex is-justify-content-stretch">
                                    {tareaEditando === index ? ( /* Si estoy editando la tarea actual*/
                                        <>
                                            <input
                                                className="input is-small"
                                                type="text"
                                                value={tareaEditada}
                                                onChange={(e) => setTareaEditada(e.target.value)}
                                                onKeyDown={ (e) => {
                                                    if (e.key === "Enter") {
                                                        guardarTareaEditada(index);
                                                    }
                                                }}
                                            />
                                            <button
                                                className="button is-success is-small ml-2"
                                                onClick={() => guardarTareaEditada(index)}
                                            >
                                                <i className="fa-solid fa-check"></i>   
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button className="editable"
                                                onClick={() => activarEdicion(index, tarea)}
                                            >{tarea}</button>
                                            <button
                                                className="hidden-content button is-danger is-small ml-2"
                                                onClick={() => eliminarTarea(index)}
                                            >
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ta6;
