import React, { useRef } from 'react'

interface InputTodoFormProps {
  onAdd(title: string): void
}

export const InputTodoForm: React.FC<InputTodoFormProps> = props => {
  const ref2 = useRef<HTMLInputElement>(null)

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      props.onAdd(ref2.current!.value)
      ref2.current!.value = ''
    }
  }

  const addInputButtonHandler = (event: React.MouseEvent) => {
    console.log("GO addInputButtonHandler");
    if (ref2.current!.value === '') {

      event.preventDefault();
      alert('the messageis empty ');
      console.log("GO  is empty");
      return false;
    }
    props.onAdd(ref2.current!.value)
    ref2.current!.value = ''
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
      <button onClick={addInputButtonHandler}>Add of input value</button>
    </div>
  )
}
