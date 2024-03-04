import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])
  
  //addTodo me hame naya todo add karna hai exisiting todos me (id inject karne ke baad) ...prev matlab prev phle ka array of todo hai uske phle hamne naya object (jo add karna hai wo daal diya)
  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }
  
  //foreach se bhi kar skte bas loop me id find kara aur update kar diya uske hisaab se
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
 
  //phle state ka pichla nikaala callback ke help se
  //fir sabko iterate kara id match karne le liye
  //agar ni hui toh koi baat ni
  //agar hui toh us object ke andar completed change (toggle) kar diya
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))

    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          //indexing se loop mat karo jab koi id jaisi cheez ho toh
                          <div key={todo.id}
                          className='w-full'> 
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
