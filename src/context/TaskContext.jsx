import { createContext, useState, useEffect } from "react"
import { data } from '../data/tasks'

// useContext: permite que no haya que ir pasando props de componente a componente (prop drilling) lo cual haria dificil de mantener el código en proyectos grandes. Todos los componentes pueden tener acceso directo al context, que contendrá aquellos elementos que queramos que sean accesibles.

// define el nombre del contexto
export const TaskContext = createContext()

// define el componente padre que englobará a todos. El nombre estándar es TaskContext.Provider
export function TaskContextProvider(props) {

    // A continuación: valores que todos los componentes podrán utilizar, ya que en main.jsx vemos como TaskContextProvider envuelve el componente App

    // crea una variable tasks que inicialmente será un array vacío
    const [tasks, setTasks] = useState([])

    // recibe un objeto task y lo añade como un nuevo objeto al array de tareas
    function createTask(task) {
        setTasks([...tasks, { id: tasks.length + 1, title: task.title, description: task.description, date: task.date }])
    }

    // borra un objeto task según el id pasado
    function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    // ejecuta el useEffect cuando carga el componente TaskContext. Esto hace que se seteen los valores del objeto data, de manera que en lugar de mostrar el array vacío muestra el contenido del objeto data
    useEffect(function () {
        setTasks(data)
    }, [])


    // en value se pasa un objeto con los elementos que queremos exportar: el array y las funciones
    return (
        <TaskContext.Provider value={{ tasks: tasks, deleteTask: deleteTask, createTask: createTask }}>
            {props.children}
        </TaskContext.Provider>
    )
}

