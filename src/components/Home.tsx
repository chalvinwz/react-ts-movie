// hooks

// custom hooks
import { useHomeFetch } from "../hooks/useHomeFetch"

// config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config"

// components
import HeroImage from "./HeroImage/HeroImage"
import Grid from "./Grid/Grid"
import Thumb from "./Thumb/Thumb"
import Spinner from "./Spinner/Spinner"
import SearchBar from "./SearchBar/SearchBar"
import Button from "./Button/Button"

// images
import NoImage from "../images/no_image.jpg"

const Home: React.FC = () => {
	const { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore } =
		useHomeFetch()

	if (error) return <div>Something went wrong...</div>

	return (
		<>
			{!searchTerm && state.results[0] && (
				<HeroImage
					image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
					title={state.results[0].original_title}
					text={state.results[0].overview}
				/>
			)}

			<SearchBar setSearchTerm={setSearchTerm} />

			<Grid
				header={
					searchTerm ? `Search Related to ${searchTerm}` : "Popular Movies"
				}
			>
				{state.results.map((result) => (
					<Thumb
						key={result.id}
						clickable
						image={
							result.poster_path
								? `${IMAGE_BASE_URL}${POSTER_SIZE}${result.poster_path}`
								: NoImage
						}
						movieId={result.id}
					/>
				))}
			</Grid>

			{loading && <Spinner />}
			{state.page < state.total_pages && !loading && (
				<Button text='Load More' callback={() => setIsLoadingMore(true)} />
			)}
		</>
	)
}

export default Home
