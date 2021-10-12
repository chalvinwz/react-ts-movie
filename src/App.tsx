// Global style
import { GlobalStyle } from "./GlobalStyle"

// react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// components
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home"
import Movie from "./components/Movie"
import NotFound from "./components/NotFound"
import Footer from "./components/Footer/Footer"

const App: React.FC = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/movie/:movieId'>
					<Movie />
				</Route>
				<Route path='/*'>
					<NotFound />
				</Route>
			</Switch>
			<Footer />
			<GlobalStyle />
		</Router>
	)
}

export default App
