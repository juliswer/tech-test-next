import React from 'react'
import TaskForm from '../components/TaskForm'

function create() {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
        <TaskForm title={"Create Your Task!"} />
    </div>
  )
}

export default create