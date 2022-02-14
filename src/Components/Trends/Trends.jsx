import './Trends.scss'
import content from '../../Localization/Content.js'
import useLang from '../../Hooks/useLang.js'
import useTheme from '../../Hooks/useTheme.js'

import Settings from '../Lib/Settings.jsx'
import Ellipsis from '../Lib/Ellipsis.jsx'

function Trends() {
	const [lang] = useLang()
	const [theme] = useTheme()

	return (
		<>
			<div className={`trends ${theme === 'dark' && 'dark'}`}>
				<div className='trends__header'>
					<h3 className='trends__heading'>
						{content[lang].aside.trends.heading}
					</h3>

					<Settings theme={theme} />
				</div>
				<ul className='trends__list'>
					<li className='trends__item'>
						<p className='trends__item-address'>
							{content[lang].aside.trends.address}
						</p>
						<h4 className='trends__item-heading'>
							{content[lang].aside.trends.description}
						</h4>
						<p className='trends__item-selected'>
							{content[lang].aside.trends.tweets}
						</p>
						<Ellipsis />
					</li>
					<li className='trends__item'>
						<p className='trends__item-address'>
							{content[lang].aside.trends.address}
						</p>
						<h4 className='trends__item-heading'>
							{content[lang].aside.trends.description}
						</h4>
						<p className='trends__item-selected'>
							{content[lang].aside.trends.tweets}
						</p>
						<Ellipsis />
					</li>
					<li className='trends__item'>
						<p className='trends__item-address'>
							{content[lang].aside.trends.address}
						</p>
						<h4 className='trends__item-heading'>
							{content[lang].aside.trends.description}
						</h4>
						<p className='trends__item-selected'>
							{content[lang].aside.trends.tweets}
						</p>
						<Ellipsis />
					</li>
				</ul>

				<a className='trends__more' href='#link'>
					{content[lang].aside.trends.link}
				</a>
			</div>
		</>
	)
}

export default Trends
