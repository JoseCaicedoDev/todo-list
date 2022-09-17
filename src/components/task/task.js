import React from 'react';
import './_task.scss';
import { AiOutlineCloseCircle } from 'react-icons/ai'

function Task({text, completed, id, completedTask, deleteTask}){
  return(
    <>
      <div className={completed ? 'container-task completed' : 'container-task'}>
        <p onClick={()=> completedTask(id)} className='task-text'>{text}</p>
        <span onClick={()=> deleteTask(id)} className='task-icon'><AiOutlineCloseCircle className='icon' /></span>
      </div>
    </>
  )
}

export default Task