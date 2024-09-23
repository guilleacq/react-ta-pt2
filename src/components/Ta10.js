import React, {useState, useEffect} from "react";

function Ta10() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            setUsuarios(data);
            setLoading(false);
        })

        .catch((error) => {
            console.error("Error fetching data:", error);
            setLoading(false);
        })

    }, []);

    if (loading) {
        return <div>Cargando usuarios...</div>
    }
    
    return (
        <div className="container">
            <h1 className="title">Lista de Usuarios</h1>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id} className="mt-2">
                        <strong>Nombre: </strong>{usuario.name} <br/>
                        <strong>Email: </strong>{usuario.email} <br/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Ta10;