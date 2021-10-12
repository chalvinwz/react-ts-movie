// styles
import { Wrapper, Image } from "./Actor.styles"

// prop-types
import PropTypes from "prop-types"

const Actor = ({ name, character, imageUrl }) => {
	return (
		<Wrapper>
			<Image src={imageUrl} alt='actor_thumb' />
			<h3>{name}</h3>
			<p>{character}</p>
		</Wrapper>
	)
}

Actor.propTypes = {
	name: PropTypes.string,
	character: PropTypes.string,
	imageUrl: PropTypes.string,
}

export default Actor
