import React from 'react'
import "./todo.css"
import TodoInputBox from '../components/TodoComponents/TodoInputBox'
import TodoItem from '../components/TodoComponents/TodoItem'

const Todo = () => {
    return (
        <div id='todoPage'>
            <div className="todoPageContainer">

                <h3 className='text-white text-center'>Todo App</h3>

                <TodoInputBox />

                <div className="todoContainer">
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                </div>
            </div>

        </div>
    )
}

export default Todo