import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../store/todoSlice"; // Importing removeTodo action creator

// Functional component for displaying todos
const Todos = () => {
  // Selecting todos from the Redux store state
  const todos = useSelector((state) => state.todos);
  // Dispatch function obtained from react-redux
  const dispatch = useDispatch();
  // State to track completed todos
  const [completed, setCompleted] = useState([]);

  // Function to handle checkbox change
  const handleCheckboxChange = (id) => {
    if (completed.includes(id)) {
      // If the todo is already marked as completed, remove it from completed array
      setCompleted(completed.filter((item) => item !== id));
    } else {
      // If the todo is not marked as completed, add it to completed array
      setCompleted([...completed, id]);
    }
  };

  // Rendering todos list
  return (
    <>
      <ul className="mx-auto list-none w-2/3">
        {/* Mapping through todos array and rendering each todo */}
        {todos.map((todo) => (
          <li
            className={`mt-4 flex rounded-lg justify-between items-center ${
              // Applying conditional styling based on whether the todo is completed or not
              completed.includes(todo.id) ? "bg-lime-200" : "bg-white"
            } px-4 py-2`}
            key={todo.id}
          >
            <div
              className={`flex items-center ${
                // Applying conditional styling for completed todos
                completed.includes(todo.id) ? "line-through text-gray-500" : ""
              }`}
            >
              {/* Checkbox for marking todo as completed */}
              <input
                type="checkbox"
                checked={completed.includes(todo.id)}
                onChange={() => handleCheckboxChange(todo.id)} // Handling checkbox change
                className="mr-2"
              />
              {/* Todo text */}
              {todo.text}
            </div>
            {/* Button to remove todo */}
            <button
              onClick={() => dispatch(removeTodo(todo.id))} // Dispatching removeTodo action
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              {/* SVG icon for delete */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  // Path for delete icon
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos; // Exporting the Todos component
