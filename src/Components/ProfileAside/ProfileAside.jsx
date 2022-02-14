import './ProfileAside.scss'
import Search from '../Search/Search.jsx'
import Images from '../Images/Images.jsx'
import Like from '../Like/Like.jsx'
import Trends from '../Trends/Trends.jsx'

function ProfileAside() {
	return (
		<>
			<aside className='profile-aside'>
				<Search />

				<Images />

				<Like />

				<Trends />
			</aside>
		</>
	)
}

export default ProfileAside
