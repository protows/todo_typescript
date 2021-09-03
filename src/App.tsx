import React from 'react'
import { Navbar } from './components/Navbar'
import { TodosPage } from './pages/TodosPage'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <TodosPage />
    </>
  )
}

export default App
