import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

// componente que renderiza los datos de las tareas
// muestra un botón para eliminar que ejecuta la función deleteTask pasándole el ID de esa tarea
function TaskCard({ task }) {

    // obtiene  la función para borrar una tarea  desde el contexto
    const { deleteTask } = useContext(TaskContext)

    return (
        <>
            <h2 className='text-xl font-bold capitalize'>{task.title}</h2>
            <p className='text-gray-400 text-sm mt-2 mb-2'>{task.description}</p>
            <p className='text-red-400 text-md'>{task.date}</p>
            <button className='bg-red-500 rounded-md px-2 py-1 mt-4 hover:bg-red-400' onClick={function () {
                return deleteTask(task.id)
            }}
            >Eliminar tarea</button>

        </>
    )
}

export default TaskCard