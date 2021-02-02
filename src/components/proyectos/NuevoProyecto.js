import React, { useContext, useState } from 'react'
import ProyectoContext from '../../context/proyectos/ProyectoContext'

const NuevoProyecto = () => {

    const proyectoContext = useContext(ProyectoContext)
    const { formulario, mostrarFormulario, agregarProyecto } = proyectoContext

    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    })

    const {nombre} = proyecto

    const onChangeProyecto = (e) => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitProyecto = (e) => {
        e.preventDefault()
        if(nombre === '') {
            return
        }
        agregarProyecto(proyecto)
        guardarProyecto({
            nombre : ''
        })
    }

    const onClickFormulario = () => {
        mostrarFormulario()
    }

    return (
        <>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >Nuevo Proyecto</button>
            {
                formulario
                ? (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar proyecto"
                        />
                    </form>
                )
                : null
            }
        </>
    )
}

export default NuevoProyecto
