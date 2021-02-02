import React, { useReducer } from 'react'
import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO } from '../../types/Index'

import {v4 as uuidv4} from 'uuid'

import ProyectoContext from './ProyectoContext'
import ProyectoReducer from './ProyectoReducer'

const ProyectoState = props => {

    const proyectos = [
            { id: 1, nombre: 'tienda 1' },
            { id: 2, nombre: 'tienda 2' },
            { id: 3, nombre: 'tienda 3' },
        ]

    const initialState = {
        proyectos : [],
        formulario : false
    }
    const [state, dispatch] = useReducer(ProyectoReducer, initialState, )

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    const agregarProyecto = proyectos => {
        proyectos.id = uuidv4()
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyectos
        })
    }

    return(
        <ProyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario : state.formulario,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto
            }}
        >
            {props.children}
        </ProyectoContext.Provider>
    )
}

export default ProyectoState