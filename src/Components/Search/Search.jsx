import './Search.scss'
import content from '../../Localization/Content.js'
import useLang from '../../Hooks/useLang.js'
import useTheme from '../../Hooks/useTheme.js'

import SearchIcon from '../../Assets/Images/search_icon.svg'

function Search() {
	const [lang] = useLang()
	const [theme] = useTheme()

	return (
		<>
			<div className={`search ${theme === 'dark' && 'dark'}`}>
				<input
					className='search__input'
					type='search'
					placeholder={content[lang].aside.search.placeholder}
				/>
				<img
					className='search__icon'
					src={SearchIcon}
					alt='Search icon'
					width='20'
					height='20'
				/>
			</div>
		</>
	)
}

export default Search
