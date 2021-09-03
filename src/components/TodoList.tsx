import React from 'react'
import { ITodo } from '../interfaces'

type TodoListProps = {
  todos: ITodo[]
  onToggle(id: number): void
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggle
}) => {
  if (todos.length === 0) {
    return <p className="center">No data yet</p>
  }

  return (
    <ul className="mt2">
      {todos.map(todo => {
        const classes = ['todo']
        if (todo.completed) {
          classes.push('completed')
        }

        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
            </label>
          </li>
        )
      })}
    </ul>
  )
}
