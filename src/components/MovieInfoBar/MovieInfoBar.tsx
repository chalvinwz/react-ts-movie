// styles
import { Wrapper, Content } from "./MovieInfoBar.styles"

// helpers
import { calcTime, convertMoney } from "../../helpers"

type Props = {
	time: number
	budget: number
	revenue: number
}

const MovieInfoBar: React.FC<Props> = ({ time, budget, revenue }) => {
	return (
		<Wrapper>
			<Content>
				<div className='column'>
					<p>Running time: {calcTime(time)}</p>
				</div>
				<div className='column'>
					<p>Budget: {convertMoney(budget)}</p>
				</div>
				<div className='column'>
					<p>Revenue: {convertMoney(revenue)}</p>
				</div>
			</Content>
		</Wrapper>
	)
}

export default MovieInfoBar
