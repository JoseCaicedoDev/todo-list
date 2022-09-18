import Task from "./components/task/task";
import TaskForm from "./components/taskForm/taskForm";
import {useState} from 'react'

function App() {

  // Estableciendo estado inicial de las tareas dentro del localStorage, en donde
  // se parse el string guardo, en caso de no tener nada es un arreglo vacio
  const tareas = JSON.parse(localStorage.getItem('Tareas') || '[]')
  const [tasks, setTasks] = useState(tareas)

  const addTask = task =>{
    if(task.text.trim()){
      task.text = task.text.trim()
      const tareas = JSON.parse(localStorage.getItem('Tareas') || '[]')
      tareas.push(task)
      //guardar en el localStorage en formato string
      localStorage.setItem('Tareas', JSON.stringify(tareas))
      //actualizacion del estado de las tareas en la aplicacion
      setTasks(tareas)

    }
  }

  const deleteTask = id =>{
    const updatedTask = tasks.filter( task => task.id !== id)
    localStorage.setItem('Tareas', JSON.stringify(updatedTask))
    setTasks(updatedTask)
  }

  const completedTask = id =>{
    const updatedTask = tasks.map( task => {
      if (task.id === id){
        task.completed = !task.completed
      }
      return task
    })
    localStorage.setItem('Tareas', JSON.stringify(updatedTask))
    setTasks(updatedTask)
  }

  return (
    <>
    <div className="container">
      <div className="App">
        <h1 className='title'>Todo list</h1>
      </div>
      <div className="list_task">
        <h3>Mis tareas</h3>
        <TaskForm onSubmit={addTask} />
        {
          tasks.map((task) =>
            <Task
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            deleteTask={deleteTask}
            completedTask={completedTask} />
          )
        }
      </div>
    </div>
    </>
  );
}

export default App;
