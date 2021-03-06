import { useState, useEffect } from "react"

import API, { Movie } from "../API"
import { isPersistedState } from "../helpers"

const initialState = {
	page: 0,
	results: [] as Movie[],
	total_pages: 0,
	total_results: 0,
}

export const useHomeFetch = () => {
	const [state, setState] = useState(initialState)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(false)
	const [searchTerm, setSearchTerm] = useState("")
	const [isLoadingMore, setIsLoadingMore] = useState(false)

	const fetchMovies = async (page: number, searchTerm = "") => {
		try {
			setError(false)
			setLoading(true)

			const movies = await API.fetchMovies(searchTerm, page)

			setState((prevState) => ({
				...movies,
				results:
					page > 1
						? [...prevState.results, ...movies.results]
						: [...movies.results],
			}))
		} catch (err) {
			setError(true)
		}

		setLoading(false)
	}

	// initial and search
	useEffect(() => {
		if (!searchTerm) {
			const sessionState = isPersistedState("homeState")

			if (sessionState) {
				setState(sessionState)
				return
			}
		}
		setState(initialState)
		fetchMovies(1, searchTerm)
	}, [searchTerm])

	// load more
	useEffect(() => {
		if (!isLoadingMore) return

		fetchMovies(state.page + 1, searchTerm)
		setIsLoadingMore(false)
	}, [isLoadingMore, searchTerm, state.page])

	useEffect(() => {
		if (!searchTerm) sessionStorage.setItem("homeState", JSON.stringify(state))
	}, [searchTerm, state])

	return { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore }
}
