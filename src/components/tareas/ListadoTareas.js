import React from 'react'
import Tarea from './Tarea'

const ListadoTareas = () => {

    const tareas = [
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Color', estado: false},
        {nombre: 'Elegir Plataforma de pago', estado: false},
        {nombre: 'Elegir Hosting', estado: true},
    ]

    return (
        <>
            <h2>Proyecto: Tienda 1</h2>
            <ul className="listado-tareas">
                {tareas.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : (tareas.map(tarea => (
                        <Tarea
                            tarea={tarea}
                        />
                    )))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
            >Eliminar Proyecto &times;</button>
        </>
    )
}

export default ListadoTareas
