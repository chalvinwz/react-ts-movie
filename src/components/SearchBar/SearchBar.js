// hooks
import { useState, useEffect, useRef } from "react"

// styles
import { Wrapper, Content } from "./SearchBar.styles"

// image
import searchIcon from "../../images/search-icon.svg"

import PropTypes from "prop-types"

const SearchBar = ({ setSearchTerm }) => {
	const [state, setState] = useState("")
	const initial = useRef(true)

	useEffect(() => {
		if (initial.current) {
			initial.current = false
			return
		}

		const timer = setTimeout(() => {
			setSearchTerm(state)
		}, 500)

		return () => clearTimeout(timer)
	}, [setSearchTerm, state])

	return (
		<Wrapper>
			<Content>
				<img src={searchIcon} alt='search-icon' />
				<input
					type='text'
					placeholder='Search Movies'
					onChange={(e) => setState(e.currentTarget.value)}
					value={state}
				/>
			</Content>
		</Wrapper>
	)
}

SearchBar.propTypes = {
	setSearchTerm: PropTypes.func,
}

export default SearchBar
