import Task from "./components/task/task";
import TaskForm from "./components/taskForm/taskForm";
import {useState} from 'react'

function App() {

  const [tasks, setTasks] = useState([])

  const addTask = task =>{
    if(task.text.trim()){
      task.text = task.text.trim()
      const updatedTask = [task, ...tasks]
      setTasks(updatedTask)
    }
  }

  const deleteTask = id =>{
    const updatedTask = tasks.filter( task => task.id !== id)
    setTasks(updatedTask)
  }

  const completedTask = id =>{
    const updatedTask = tasks.map( task => {
      if (task.id === id){
        task.completed = !task.completed
      }
      return task
    })
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
