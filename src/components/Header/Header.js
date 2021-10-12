// Header Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles"

import { Link } from "react-router-dom"

import RMDBLogo from "../../images/react-movie-logo.svg"
import TMDBLogo from "../../images/tmdb_logo.svg"

const Header = () => {
	return (
		<Wrapper>
			<Content>
				<Link to='/'>
					<LogoImg src={RMDBLogo} alt='rmdb-logo' />
				</Link>
				<TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
			</Content>
		</Wrapper>
	)
}

export default Header