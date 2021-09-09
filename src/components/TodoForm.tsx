import React, { useRef } from 'react'

interface TodoFormProps {
  onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {
  const ref2 = useRef<HTMLInputElement>(null)

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref2.current!.value)
      ref2.current!.value = ''
    }
  }

  return (
    <div className="input-field mt2">
      <input
        // onChange={changeHandler}
        // value={title}
        ref={ref2}
        type="text"
        id="title"
        placeholder="enter your item"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Enter your item
      </label>
    </div>
  )
}
