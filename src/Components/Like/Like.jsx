import './Like.scss'
import content from '../../Localization/Content.js'
import useLang from '../../Hooks/useLang.js'
import useTheme from '../../Hooks/useTheme.js'

import User4 from '../../Assets/Images/user4.png'
import User5 from '../../Assets/Images/user5.png'

function Like() {
	const [lang] = useLang()
	const [theme] = useTheme()

	return (
		<>
			<div className={`like ${theme === 'dark' && 'dark'}`}>
				<h3 className='like__heading'>{content[lang].aside.like.heading}</h3>

				<ul className='like__users'>
					<li className='like__user'>
						<img
							className='like__user-image'
							src={User4}
							alt='User img'
							width='60'
							height='60'
						/>

						<div className='like__user-info'>
							<h4 className='like__user-name'>Mushtariy</h4>
							<a className='like__user-account' href='mailto:@Mushtar565266'>
								@Mushtar565266
							</a>
						</div>

						<button className='like__user-btn'>
							{content[lang].aside.like.button}
						</button>
					</li>

					<li className='like__user'>
						<img
							className='like__user-image'
							src={User5}
							alt='User img'
							width='60'
							height='60'
						/>

						<div className='like__user-info'>
							<h4 className='like__user-name'>Shuhratbek</h4>
							<a className='like__user-account' href='mailto:@mrshukhrat'>
								@mrshukhrat
							</a>
						</div>

						<button className='like__user-btn'>
							{content[lang].aside.like.button}
						</button>
					</li>
				</ul>

				<a className='like__more' href='#link'>
					{content[lang].aside.like.link}
				</a>
			</div>
		</>
	)
}

export default Like
