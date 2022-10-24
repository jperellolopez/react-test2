import { useState, useContext} from "react"
import {TaskContext} from '../context/TaskContext'

function TaskForm() {

    // hook para capturar los titulos, descripciones y fechas de las nuevas tareas
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    // obtiene la función createTask del contexto para poder usarla aquí
    const {createTask} = useContext(TaskContext)

    // función para guardar los datos al enviar el formulario
    const handleSubmit = function (e) {
        e.preventDefault()
        //utiliza el método createTask que se ha recibido desde App por props, pasándole un objeto nuevo
        return createTask({title, description, date}),
        // limpia los campos tras enviar
        setTitle(''),
        setDescription(''),
        setDate('')
    }

    return (
        <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4" >
        <h1 className="text-white text-2xl font-bold mb-3">Crear Nueva Tarea</h1>
            <input placeholder="Título..."
                onChange={function (e) { setTitle(e.target.value) }} 
                value={title}
                autoFocus
                className="bg-slate-300 p-3 w-full mb-2"
            />
            <textarea placeholder="Descripción..."
                onChange={function (e) { setDescription(e.target.value) }}
                value={description}
                className="bg-slate-300 p-3 w-full mb-2"
            />

            <input placeholder="Fecha..."
                onChange={function (e) { setDate(e.target.value) }}
                value={date}
                className="bg-slate-300 p-3 w-full mb-2"
            />
            <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
        </form>
        </div>
    )
}

export default TaskForm