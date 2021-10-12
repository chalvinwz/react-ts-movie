// styles
import { Wrapper, Image } from "./Actor.styles"

type Props = {
	name: string
	character: string
	imageUrl: string
}

const Actor: React.FC<Props> = ({ name, character, imageUrl }) => {
	return (
		<Wrapper>
			<Image src={imageUrl} alt='actor_thumb' />
			<h3>{name}</h3>
			<p>{character}</p>
		</Wrapper>
	)
}

export default Actor
