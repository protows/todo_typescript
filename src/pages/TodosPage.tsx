import React, { useState, useEffect } from 'react'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { ITodo } from '../interfaces'
import { ModalWindowContainer } from '../components/index'

declare var confirm: (question: string) => boolean


export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])




  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title2: string) => {
    console.log("GO addInputButtonHandler in TodoPage", title2);
    const newTodo: ITodo = {
      title: title2,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  return (
    <React.Fragment>
      <TodoList
        todosOut={todos}
        onToggle={toggleHandler}
      />
      <ModalWindowContainer onAdd={addHandler} />
    </React.Fragment>

  )
}