import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { AnimationType } from '../components/Types/Types'
import ModalWindow from '../components/App'
import Button from '../components/MWButton'
import CloseButton from '../components/CloseButton'
import { ThemeProvider, theme } from '../components/theme'

import { InputTodoForm } from '../components/InputTodoForm'


interface InputTodoFormProps {
	onAdd(title: string): void
}


export const ModalWindowContainer: React.FC<InputTodoFormProps> = (props) => {

	// function ModalWindowContainer() {
	const [effect, setEffect] = useState<AnimationType>('effect-1')
	const [open, setOpen] = useState<boolean>(false)

	function closeModalWindow() {
		setOpen(false)
	}

	const addHandler = (text1: string) => {
		console.log("GO addInputButtonHandler in index", text1);
		props.onAdd(text1)
		setOpen(false)


	}

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<ModalWindow closeHandler={closeModalWindow} animation={effect} open={open}>
					<img alt="Code" src="./img/code.png" className="img-fluid" />

					<p>omes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, writ.</p>

					<CloseButton handleEvent={() => closeModalWindow()} text={'Close'} />
					<InputTodoForm onAdd={addHandler} />



				</ModalWindow>

				<Button handleEvent={() => setOpen(true)} text={'Open Modal'} />
			</ThemeProvider>
		</React.Fragment>
	)
}
// ReactDOM.render(<ModalWindowContainer />, document.getElementById('root'))
