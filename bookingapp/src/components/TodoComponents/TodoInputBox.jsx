import React from 'react'

const TodoInputBox = () => {
  return (
    <div className="todoInputBox">
      <input type="text" placeholder='Enter A Task' name="task" />
      <button>Add</button>
    </div>
  )
}

export default TodoInputBox