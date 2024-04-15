import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../store/todoSlice'

const AddTodo = () => {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }


  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12 mb-20">
      <input
        type="text"
        className="rounded-full border-[4px] focus:ring-2 border-lime-300 text-base outline-none text-black py-2 px-3 leading-8 transition-colors duration-200 ease-in-out w-3/4 lg:w-2/5"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white border-[3px] border-lime-300 py-3 px-5 font-extrabold focus:outline-none hover:bg-lime-300 rounded-full text-lg"
      >
        +
      </button>
    </form>
  )
}

export default AddTodo