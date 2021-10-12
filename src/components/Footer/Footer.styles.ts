import styled from "styled-components"

export const Wrapper = styled.footer`
	background: var(--darkGrey);
	padding: 20px;
	color: var(--white);
	margin-top: 40px;
	min-width: 100%;
`

export const Content = styled.div`
	max-width: var(--maxWidth);
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const LogoImg = styled.img`
	width: 160px;

	@media screen and (max-width: 500px) {
		width: 130px;
	}
`

export const Copyright = styled.div`
	margin: 0 20px;
	text-align: center;
`

export const SocmedWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-width: 100px;
`
