import React, { useState, useEffect } from 'react'
import { css, createGlobalStyle } from './theme'
import { FadeType, AnimationType } from './Types/Types'
import Overlay from './Overlay'
import Modal from './Modal'

const GlobalStyle = createGlobalStyle<{ visible: boolean }>`
body {
	${(props) =>
		props.visible &&
		css`
			height: 100%;
			width: 100%;
			overflow: hidden;
			position: fixed;
		`}
}

html {
	${(props) =>
		props.visible &&
		css`
			height: 100%;
			width: 100%;
			overflow: hidden;
			position: fixed;
		`}
}
`

interface iProps {
	children?: JSX.Element[] | JSX.Element
	open: boolean
	closeHandler: () => void
	animation: AnimationType
}

function ModalWindow(props: iProps) {
	//console.log('APP.TSX: props.animation: ' + props.animation)

	const [togglePanel, setTogglePanel] = useState<boolean>(false)
	const [isPanelVisible, setPanelVisible] = useState<boolean>(false)
	const [hasOverlayAnimationEnded, sethasOverlayAnimationEnded] = useState<boolean>(false)
	const [hasPanelTransitionEnded, sethasPanelTransitionEnded] = useState<boolean>(false)
	const [fade, setFade] = useState<FadeType>('')

	useEffect(() => {
		if (props.open) {
			openPanel()
		} else {
			closePanel()
		}
	}, [props.open])

	useEffect(() => {
		// if modal should be open
		if (togglePanel) {
			if (!isPanelVisible) {
				setPanelVisible(true) // set modal to visible
				setFade('in') // set overlay to fade in
			}
		} else {
			if (isPanelVisible) {
				setPanelVisible(false)
				setFade('out')
			}
		}
	}, [togglePanel, isPanelVisible])

	useEffect(() => {
		if (togglePanel) {
			if (hasOverlayAnimationEnded && hasPanelTransitionEnded) {
				// Reset states
				sethasOverlayAnimationEnded(false)
				sethasPanelTransitionEnded(false)
			}
		} else {
			if (hasOverlayAnimationEnded && fade === 'out') {
				setFade('')
			}
		}
	}, [hasOverlayAnimationEnded, hasPanelTransitionEnded, togglePanel, fade])

	function closePanel() {
		setTogglePanel(false)
	}

	function openPanel() {
		setTogglePanel(true)
	}

	function onOverlayAnimationEnd() {
		sethasOverlayAnimationEnded(true)
	}

	function onPanelTransitionEnd() {
		sethasPanelTransitionEnded(true)
	}

	return (
		<React.Fragment>
			<GlobalStyle visible={isPanelVisible} />
			<Overlay fade={fade} handleEvent={props.closeHandler} onAnimationEnd={onOverlayAnimationEnd} />
			<Modal animation={props.animation} visible={isPanelVisible} onTransitionEnd={onPanelTransitionEnd} children={props.children} />
		</React.Fragment>
	)
}

export default ModalWindow
