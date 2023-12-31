import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import TodoList from './pages/TodoList'

const App = () => {
  return (
    <Routes>
      <Route path='*' element={<Signin />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/todo' element={<TodoList />} />
    </Routes>
  )
}

export default App
