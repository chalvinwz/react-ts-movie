import {
	Wrapper,
	Content,
	LogoImg,
	Copyright,
	SocmedWrapper,
} from "./Footer.styles"
import { Link } from "react-router-dom"

import RMDBLogo from "../../images/react-movie-logo.svg"
import Twitter from "../../images/twitter.svg"
import Instagram from "../../images/instagram.svg"
import Linkedin from "../../images/linkedin.svg"

const Footer = () => {
	return (
		<Wrapper>
			<Content>
				<Link to='/'>
					<LogoImg src={RMDBLogo} alt='rmdb-logo' />
				</Link>
				<Copyright>&copy; Chalvin Wiradhika 2021 : FCC Tutorial </Copyright>
				<SocmedWrapper>
					<a href='https://twitter.com/chalvinwz'>
						<img src={Twitter} alt='rmdb-logo' />
					</a>
					<a href='https://www.instagram.com/chalvinwz/'>
						<img src={Instagram} alt='rmdb-logo' />
					</a>
					<a href='https://www.linkedin.com/in/chalvinwiradhika/'>
						<img src={Linkedin} alt='rmdb-logo' />
					</a>
				</SocmedWrapper>
			</Content>
		</Wrapper>
	)
}

export default Footer
