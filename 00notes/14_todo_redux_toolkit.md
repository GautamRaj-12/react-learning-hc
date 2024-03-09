## Todo using Redux Toolkit

- `app/store.js`
```
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})
```

- `main.jsx`
```
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
```

- `App.jsx`
```
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
```

- `features/todo/todoSlice.js`
```
import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer
```

- `components/AddTodo.jsx`
```
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo
```

- `components/Todo.jsx`
```
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
    <>
    <div>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
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
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
```

## Explaination

- **app/store.js**
This file sets up the Redux store using the configureStore function from @reduxjs/toolkit. It imports the todoReducer from the ../features/todo/todoSlice file and uses it as the root reducer for the store.

- **main.jsx**
This file is the entry point of your application. It uses ReactDOM.createRoot to render the App component inside the Provider component from react-redux. The Provider component allows the entire application to access the Redux store.

- **App.jsx**
The main component of your application renders an h1 tag, AddTodo component, and Todos component. The AddTodo component is responsible for adding new todos, and the Todos component displays the list of todos.

- **features/todo/todoSlice.js**
This file defines a Redux slice using createSlice from @reduxjs/toolkit. It contains the initial state with a sample todo, and it has two reducers: addTodo and removeTodo. These reducers handle adding a new todo and removing an existing todo, respectively.

- **components/AddTodo.jsx**
This component provides a form for adding new todos. It uses the useDispatch hook to dispatch the addTodo action from the Redux store. The input value is controlled by the component's state, and the addTodoHandler function dispatches the addTodo action with the input value.

- **components/Todo.jsx**
This component displays a list of todos retrieved from the Redux store using the useSelector hook. It also uses the useDispatch hook to dispatch the removeTodo action when a user clicks the delete button. Each todo is displayed in a list with a delete button, and clicking the delete button dispatches the removeTodo action for that specific todo.

Overall, our application uses Redux Toolkit for state management. It has a simple structure with components for adding and displaying todos, and it leverages the power of Redux to manage the application state efficiently.

- [https://blog.logrocket.com/smarter-redux-redux-toolkit/](https://blog.logrocket.com/smarter-redux-redux-toolkit/)



