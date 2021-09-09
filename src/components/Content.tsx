import React from 'react'
import { styled } from './theme'
import { AnimationType } from './Types/Types'
import './Animations/animations.scss'

const Content = styled.div`
	color: #fff;
	background: #eae9e3;
	margin: 0 auto;
	max-width: 600px;
	overflow: hidden;
	position: absolute;
	bottom: 70px;
	top: 0;
	left: 0;
	right: 0;
	border-radius: 7px;
`

const Inner = styled.div`
	overflow-y: auto;
	padding-left: 20px;
	padding-right: 20px;
	padding-top: 30px;
	padding-bottom: 30px;
	margin: 0;
	font-weight: 300;
	font-size: 16px;
	color: #333;
	position: absolute;
	bottom: 0px;
	top: 0px;
	img {
		margin-bottom: 15px;
	}
`

interface iProps {
	visible: boolean
	animation: AnimationType
	children?: JSX.Element[] | JSX.Element
}

function setStyle(animation: AnimationType, visible: boolean) {
	if (visible) {
		const css = animation + ' show-' + animation
		return css
	} else {
		return animation
	}
}

function PanelContent(props: iProps) {
	//console.log('CONTENT.TSX: props.animation: ' + props.animation)
	return (
		<Content className={setStyle(props.animation, props.visible)}>
			<Inner>{props.children}</Inner>
		</Content>
	)
}

export default PanelContent
