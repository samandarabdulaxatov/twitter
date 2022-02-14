import './Aside.scss'

import Search from '../Search/Search.jsx'
import Trends from '../Trends/Trends.jsx'
import Like from '../Like/Like.jsx'

function Aside() {
	return (
		<>
			<div className='aside-section'>
				<Search />

				<Trends />

				<Like />
			</div>
		</>
	)
}

export default Aside
