import React from 'react'
import { styled } from './theme'

const PanelButton = styled.button`
	width: 50px;
	border-radius: 5px;
	background-color: #ec7574;
	color: white;
	font-weight: bold;
	height: 50px;
	border: none;
	&:focus {
		outline: 0;
	}
	min-width: 190px;
	padding-left: 20px;
	padding-right: 20px;
	margin-top: 20px;
	margin-right: 30px;
`

interface iProps {
	handleEvent: () => void
	text: string
}

function Button(props: iProps) {
	return <PanelButton onClick={props.handleEvent}>{props.text}</PanelButton>
}

export default Button
