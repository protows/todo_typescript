import React from 'react'
import { styled, css } from './theme'
import { AnimationType } from './Types/Types'
import Content from './Content'

type PanelType = {
	visible: boolean
}

const ModalElement = styled.div<PanelType>`
	position: fixed;
  border-radius: 7px;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: -50px;
  max-width: 700px;
	z-index: 2000;
	visibility: hidden;
	backface-visibility: hidden;

	@media (min-width: 768px) {
    top: 50%;
  	left: 50%;
  	width: 80%;
    max-width: 600px;
    height: 75%;
    transform: translateX(-50%) translateY(-46%);
	}


	${(props) =>
		props.visible &&
		css`
			visibility: visible;
			opacity: 1;
		`}
	}
`

function setStyle(animation: AnimationType) {
	return animation + '-modal'
}

interface iProps {
	visible: boolean
	animation: AnimationType
	onTransitionEnd: () => void
	children?: JSX.Element[] | JSX.Element
}

function Modal(props: iProps) {
	//console.log('MODAL.TSX: props.animation: ' + props.animation)
	return (
		<ModalElement className={setStyle(props.animation)} visible={props.visible} onTransitionEnd={props.onTransitionEnd}>
			<Content visible={props.visible} animation={props.animation} children={props.children} />
		</ModalElement>
	)
}

export default Modal
