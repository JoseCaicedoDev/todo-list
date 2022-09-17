import React, {useState} from 'react';
import './_taskForm.scss'
import { v4 as uuidv4} from 'uuid'

function TaskForm(props){

  const [input, setInput] = useState('')

  const handleChange = e =>{
    setInput(e.target.value)
  }

  const handleShipping = e =>{
    e.preventDefault()

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }
    props.onSubmit(newTask)
  }


  return(
    <>
      <form action="" className='task-form' onSubmit={handleShipping}>
        <input type="text"
          className='task-input'
          placeholder='Escribe una tarea'
          name='texto'
          onChange={handleChange} />
          <button className='task-btn'>Agregar tarea</button>
      </form>
    </>
  )
}
export default TaskForm