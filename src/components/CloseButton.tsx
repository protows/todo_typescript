import React from 'react'
import { styled } from './theme'

const Button = styled.button`
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
	width: 30%;
	margin-left: 35%;
	margin-right: 35%;
	margin-top: 20px;
`

interface iProps {
	handleEvent: () => void
	text: string
}

function CloseButton(props: iProps) {
	return <Button onClick={props.handleEvent}>{props.text}</Button>
}

export default CloseButton
