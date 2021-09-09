import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { AnimationType } from '../components/Types/Types'
import ModalWindow from '../components/App'
import Button from '../components/MWButton'
import CloseButton from '../components/CloseButton'
import { ThemeProvider, theme } from '../components/theme'

export const ModalWindowContainer: React.FC = () => {

	// function ModalWindowContainer() {
	const [effect, setEffect] = useState<AnimationType>('effect-1')
	const [open, setOpen] = useState<boolean>(false)

	function closeModalWindow() {
		setOpen(false)
	}

	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<ModalWindow closeHandler={closeModalWindow} animation={effect} open={open}>
					<img alt="Code" src="./img/code.png" className="img-fluid" />

					<p>omes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, writ.</p>
					<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 .</p>
					<p>
						There are many variations of passages of Lorem Ipsum available,
						but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
					</p>
					<p>ombined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
					<CloseButton handleEvent={() => closeModalWindow()} text={'Close'} />
				</ModalWindow>

				<Button handleEvent={() => setOpen(true)} text={'Open Modal'} />
			</ThemeProvider>
		</React.Fragment>
	)
}
// ReactDOM.render(<ModalWindowContainer />, document.getElementById('root'))
