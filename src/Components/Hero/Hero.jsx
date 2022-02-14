import React from 'react'
import './Hero.scss'

import content from '../../Localization/Content.js'
import useTheme from '../../Hooks/useTheme.js'
import useLang from '../../Hooks/useLang.js'

import User from '../../Assets/Images/user.png'
import ImageIcon from '../../Assets/Images/image_icon.svg'
import GifIcon from '../../Assets/Images/gif_icon.svg'
import StatsIcon from '../../Assets/Images/stats_icon.svg'
import SmileIcon from '../../Assets/Images/smile_icon.svg'
import ScheduleIcon from '../../Assets/Images/schedule.svg'

function Hero({ todos, setTodos }) {
	const [lang] = useLang()
	const [theme] = useTheme()

	const elInput = React.useRef()

	return (
		<>
			<section className={`hero ${theme === 'dark' && 'dark'}`}>
				<div className='hero__header'>
					<img src={User} alt='User img' width='70' height='70' />

					<div className='hero__content'>
						<input
							ref={elInput}
							className='hero__input'
							type='text'
							placeholder={`${content[lang].main.placeholder} ....`}
						/>

						<ul className='hero__icons'>
							<li className='hero__icon'>
								<img src={ImageIcon} alt='Img icon' />
							</li>
							<li className='hero__icon'>
								<img src={GifIcon} alt='Gif icon' />
							</li>
							<li className='hero__icon'>
								<img src={StatsIcon} alt='Stats icon' />
							</li>
							<li className='hero__icon'>
								<img src={SmileIcon} alt='Smile icon' />
							</li>
							<li className='hero__icon'>
								<img src={ScheduleIcon} alt='Schedule icon' />
							</li>
						</ul>

						<button
							className='hero__btn'
							onClick={() => {
								elInput.current.focus()

								const newTodo = {
									id: todos[todos.length - 1]?.id + 1 || 0,
									post: elInput.current.value,
								}

								setTodos([...todos, newTodo])

								elInput.current.value = null
							}}>
							{content[lang].menu.button}
						</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default Hero
