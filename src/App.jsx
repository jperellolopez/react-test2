import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

/*
PROYECTO EN VITE JS
1-Abrir una terminal de windows en la ubicación elegida y escribir: 'npm create vite'
2-Escoger las opciones y elegir un nombre para el proyecto
3- Abrir el proyecto y en la terminal ejecutar: 'npm install' y 'npm run dev'
4- Al terminar la app ejecutar: 'npm run build'
*/

// Este componente usa los hooks para manejar los datos que vienen del archivo local y dispone los otros componentes
function App() {

  return <main className='bg-zinc-900 h-screen'>
    <div className='container mx-auto p-10'>
      <TaskForm />
      <div className='grid grid-cols-4 gap-2'>
        <TaskList />
      </div>
    </div>
  </main>
}

export default App
