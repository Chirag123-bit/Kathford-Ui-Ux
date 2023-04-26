import React, { useState } from 'react'
import "./todo.css"
import TodoInputBox from '../components/TodoComponents/TodoInputBox'
import TodoItem from '../components/TodoComponents/TodoItem'
import { v4 } from 'uuid'


const Todo = () => {
    const [todos, setTodos] = useState([
        {
            id: v4(),
            task: "Go to the dentist",
            status: "pending"
        },
        {
            id: v4(),
            task: "Go to the market",
            status: "pending"
        },
        {
            id: v4(),
            task: "Go to the school",
            status: "completed"
        },
        {
            id: v4(),
            task: "Go to the shop",
            status: "pending"
        },
        {
            id: v4(),
            task: "Go Somewhere",
            status: "pending"
        },
    ]);

    const updateTodo = (clickedTodo) => {
        const updatedTodos = todos.map((todo) => {
            if (clickedTodo.id == todo.id) {
                if (todo.status == "pending") {
                    return { ...todo, status: "completed" }
                }
                else {
                    return { ...todo, status: "pending" }

                }
            }
            return todo
        });
        setTodos(updatedTodos)
    }


    const addTodo = (task) => {
        let newTodo = {
            id: v4(),
            task: task,
            status: "pending"
        }
        setTodos([...todos, newTodo])
    }



    return (
        <div id='todoPage'>
            <div className="todoPageContainer">
                <h3 className='text-white text-center'>Todo App</h3>
                
                <TodoInputBox addTodo={addTodo} />

                <div className="todoContainer">
                    {
                        todos.map((todo) => {
                            return <TodoItem todo={todo} updateTodo={updateTodo} />
                        })
                    }


                </div>
            </div>

        </div>
    )
}

export default Todo