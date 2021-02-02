import React, { useContext, useEffect } from 'react'
import ProyectoContext from '../../context/proyectos/ProyectoContext'
import Proyecto from './Proyecto'

const ListadoProyectos = () => {

    const proyectoContext = useContext(ProyectoContext)
    const { proyectos, obtenerProyectos } = proyectoContext

    useEffect(() => {
        obtenerProyectos()
        // eslint-disable-next-line
    }, [])  

    return (
        <ul className="listado-proyectos">
            {proyectos.length === 0
                ? <p>No tienes proyectos creados</p>
                :
                (
                    proyectos.map(proyecto => (
                        <Proyecto
                            key={proyecto.id}
                            proyecto={proyecto}
                        />
                    ))
                )
            }            
        </ul>
    )
}

export default ListadoProyectos
