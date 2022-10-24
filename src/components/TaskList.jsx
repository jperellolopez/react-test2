import TaskCard from "./TaskCard"
import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'


// TaskList es un componente para listar las tareas. 
function TaskList() {

    // obtiene  la lista de tareas  desde el contexto
    const { tasks } = useContext(TaskContext)

    // comprueba si el array esta vacio y enseña un mensaje en ese caso
    if (tasks.length === 0) {
        return <h2 className="text-white text-4xl font-bold text-center">No hay ninguna tarea</h2>
    }

    // mapea las tareas y por cada una crea un componente TaskCard enviandole los datos por prop
    return (
        <>
            {tasks.map(
                function (task) {
                    return <div key={task.id} className="bg-gray-800 text-white p-4 rounded-md">
                        <TaskCard task={task} />
                    </div>
                }
            )
            }
        </>
    )
}

export default TaskList