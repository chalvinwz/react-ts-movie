import styled from "styled-components"

export const Wrapper = styled.div`
	color: var(--white);
	background: var(--darkGrey);
	border-radius: 20px;
	padding: 8px;
	text-align: center;

	h3 {
		margin: 16px 0 0 0;
	}

	p {
		margin: 4px 0 0 0;
	}
`

export const Image = styled.img`
	display: block;
	width: 100%;
	height: 200px;
	object-fit: cover;
	border-radius: 16px;
	:hover {
		opacity: 0.8;
	}
`
