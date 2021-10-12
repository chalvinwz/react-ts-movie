// Global style
import { GlobalStyle } from "./GlobalStyle"

// react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// components
import Header from "./components/Header/Header"
import Home from "./components/Home"
import Movie from "./components/Movie"
import NotFound from "./components/NotFound"

const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/:movieId'>
					<Movie />
				</Route>
				<Route path='/*'>
					<NotFound />
				</Route>
			</Switch>
			<GlobalStyle />
		</Router>
	)
}

export default App
