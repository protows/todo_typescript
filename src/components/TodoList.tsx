import React from 'react'
import { ITodo } from '../interfaces'

type TodoListProps = {
  todosOut: ITodo[],
  onToggle(id: number): void
}
// export const TodoList: React.FC<TodoListProps> = props => {

export const TodoList: React.FC<TodoListProps> = ({
  todosOut,
  onToggle
}) => {
  if (todosOut.length === 0) {
    return <p className="center">No data yet</p>
  }

  return (
    <ul className="mt2">
      {todosOut.map(todosOut => {
        const classes = ['todo']
        if (todosOut.completed) {
          classes.push('completed')
        }

        return (
          <li className={classes.join(' ')} key={todosOut.id}>
            <label>
              <input
                type="checkbox"
                checked={todosOut.completed}
                onChange={onToggle.bind(null, todosOut.id)}
              />
              <span>{todosOut.title}</span>
            </label>
          </li>
        )
      })}
    </ul>
  )
}
