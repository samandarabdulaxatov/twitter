import './Header.scss'

import { NavLink } from 'react-router-dom'

import content from '../../Localization/Content.js'
import useLang from '../../Hooks/useLang.js'
import useTheme from '../../Hooks/useTheme.js'
import useToken from '../../Hooks/useToken.js'

import ThemeIcon from '../Lib/ThemeIcon.jsx'

function Header() {
	const [lang, setLang] = useLang()
	const [theme, setTheme] = useTheme()
	const [, setToken] = useToken()

	return (
		<>
			<header className={`header ${theme === 'dark' && 'dark'}`}>
				<NavLink className='page__link' to='/'>
					{content[lang].main.page}
				</NavLink>

				<select
					className='langs__select'
					value={lang}
					onChange={(evt) => {
						setLang(evt.target.value)
					}}>
					<option value='uz'>UZ</option>
					<option value='en'>EN</option>
				</select>

				<ThemeIcon
					color={theme === 'dark' ? 'white' : 'black'}
					theme={theme}
					setTheme={setTheme}
				/>

				<NavLink
					className='logout__link'
					to='/'
					onClick={() => {
						setToken(false)
						setTheme('light')
					}}>
					Log Out
				</NavLink>
			</header>
		</>
	)
}

export default Header
