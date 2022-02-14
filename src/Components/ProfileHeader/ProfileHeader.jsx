import './ProfileHeader.scss'
import { Link } from 'react-router-dom'

import content from '../../Localization/Content.js'
import useTheme from '../../Hooks/useTheme.js'
import useLang from '../../Hooks/useLang.js'

import ArrowIcon from '../Lib/Arrow.jsx'

function ProfileHeader() {
	const [lang] = useLang()
	const [theme] = useTheme()

	return (
		<>
			<header className={`profile__header ${theme === 'dark' && 'dark'}`}>
				<Link to='/'>
					<ArrowIcon color={theme === 'dark' ? 'white' : 'black'} />
				</Link>

				<div className='profile__header-user'>
					<strong className='profile__header-user--name'>Bobur</strong>

					<span className='profile__header-user--tweets'>
						1,070 {content[lang].profile.header.tweet}
					</span>
				</div>
			</header>
		</>
	)
}

export default ProfileHeader
