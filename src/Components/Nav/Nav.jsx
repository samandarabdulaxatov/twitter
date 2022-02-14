import './Nav.scss'
import { NavLink } from 'react-router-dom'

import content from '../../Localization/Content.js'
import useLang from '../../Hooks/useLang.js'
import useTheme from '../../Hooks/useTheme.js'

import HomeIcon from '../Lib/Home.jsx'
import ExploreIcon from '../Lib/Explore.jsx'
import NotificationsIcon from '../Lib/Notification.jsx'
import MessagesIcon from '../Lib/Messages.jsx'
import BookmarksIcon from '../Lib/Bookmarks.jsx'
import ListsIcon from '../Lib/Lists.jsx'
import ProfileIcon from '../Lib/Profile.jsx'
import MoreIcon from '../Lib/More.jsx'

function Nav() {
	const [lang] = useLang()
	const [theme] = useTheme()

	return (
		<>
			<nav className={`nav ${theme === 'dark' && 'dark'}`}>
				<ul className='nav__list'>
					<li className='nav__item'>
						<HomeIcon color={theme === 'dark' ? '#148f9d' : 'black'} />
						<NavLink className='nav__link' to='/'>
							{content[lang].menu.list.link1}
						</NavLink>
					</li>

					<li className='nav__item'>
						<ExploreIcon color={theme === 'dark' ? '#148f9d' : 'black'} />
						<NavLink className='nav__link' to='/explore'>
							{content[lang].menu.list.link2}
						</NavLink>
					</li>

					<li className='nav__item'>
						<NotificationsIcon color={theme === 'dark' ? '#148f9d' : 'black'} />

						<NavLink className='nav__link' to='/notifications'>
							{content[lang].menu.list.link3}
						</NavLink>
					</li>

					<li className='nav__item'>
						<MessagesIcon color={theme === 'dark' ? '#148f9d' : 'black'} />
						<NavLink className='nav__link' to='/messages'>
							{content[lang].menu.list.link4}
						</NavLink>
					</li>

					<li className='nav__item'>
						<BookmarksIcon color={theme === 'dark' ? '#148f9d' : 'black'} />
						<NavLink className='nav__link' to='/bookmarks'>
							{content[lang].menu.list.link5}
						</NavLink>
					</li>

					<li className='nav__item'>
						<ListsIcon color={theme === 'dark' ? '#148f9d' : 'black'} />
						<NavLink className='nav__link' to='/lists'>
							{content[lang].menu.list.link6}
						</NavLink>
					</li>

					<li className='nav__item'>
						<ProfileIcon color={theme === 'dark' ? '#148f9d' : 'black'} />
						<NavLink className='nav__link' to='/profile'>
							{content[lang].menu.list.link7}
						</NavLink>
					</li>

					<li className='nav__item'>
						<MoreIcon color={theme === 'dark' ? '#148f9d' : 'black'} />
						<NavLink className='nav__link' to='/more'>
							{content[lang].menu.list.link8}
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default Nav
