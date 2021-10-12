import styled from "styled-components"

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 100%;
	min-height: 72px;
	background: var(--medGrey);
	color: var(--white);
`

export const Content = styled.div`
	display: flex;
	width: 100%;
	max-width: var(--maxWidth);

	a {
		text-decoration: none;
	}

	span {
		font-size: var(--fontMed);
		color: var(--white);
		padding-right: 10px;

		@media (max-width: 768px) {
			font-size: var(--fontSmall);
		}
	}
`
