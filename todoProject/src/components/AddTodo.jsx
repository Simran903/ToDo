// Importing necessary modules from React and Redux
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todoSlice' // Importing the addTodo action creator

// Functional component for adding a new todo
const AddTodo = () => {
    // State for managing the input value
    const [input, setInput] = useState('')
    // Dispatch function obtained from react-redux
    const dispatch = useDispatch()

    // Function to handle adding a new todo
    const addTodoHandler = (e) => {
        e.preventDefault() // Preventing default form submission behavior
        dispatch(addTodo(input)) // Dispatching the addTodo action with the input text
        setInput('') // Clearing the input field after adding the todo
    }

    // JSX for rendering the add todo form
    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12 mb-20">
            {/* Input field for entering todo text */}
            <input
                type="text"
                className="rounded-full border-[4px] focus:ring-2 border-lime-300 text-base outline-none text-black py-2 px-3 leading-8 transition-colors duration-200 ease-in-out w-3/4 lg:w-2/5"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)} // Handling input change
            />
            {/* Button to submit the todo */}
            <button
                type="submit"
                className="text-white border-[3px] border-lime-300 py-3 px-5 font-extrabold focus:outline-none hover:bg-lime-300 rounded-full text-lg"
            >
                +
            </button>
        </form>
    )
}

export default AddTodo // Exporting the AddTodo component
