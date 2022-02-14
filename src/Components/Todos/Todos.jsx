import './Todos.scss'
import useTheme from '../../Hooks/useTheme.js'

import Ellipsis from '../Lib/Ellipsis.jsx'

import User from '../../Assets/Images/user.png'
import User1 from '../../Assets/Images/user1.png'
import User2 from '../../Assets/Images/user2.png'
import User3 from '../../Assets/Images/user3.png'

import CommentIcon from '../Lib/Comment.jsx'
import RetweetIcon from '../Lib/Retweet.jsx'
import LikeIcon from '../Lib/Like.jsx'
import ShareIcon from '../Lib/Share.jsx'
import StatisticsIcon from '../Lib/Statistics.jsx'

import HalvedImage from '../../Assets/Images/halved_img.png'

function Todos({ todos }) {
	const [theme] = useTheme()

	return (
		<>
			<ul className={`users ${theme === 'dark' && 'dark'}`}>
				<li className='users__item'>
					<img
						className='users__image'
						src={User1}
						alt='Designsta img'
						width='60'
						height='60'
					/>
					<div className='users__info'>
						<strong className='users__name'>Designsta</strong>
						<a className='users__account' href='mailto:@inner · 25m'>
							@inner · 25m
						</a>

						<Ellipsis />
						<p className='users__post'>
							Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar
							zerikmadinglarmi?
						</p>

						<ul className='users__icons'>
							<li className='users__icon'>
								<CommentIcon color={theme === 'dark' ? 'white' : 'black'} />
							</li>
							<li className='users__icon'>
								<RetweetIcon color={theme === 'dark' ? 'white' : 'black'} />
							</li>
							<li className='users__icon'>
								<LikeIcon color={theme === 'dark' ? 'white' : 'black'} />
							</li>
							<li className='users__icon'>
								<ShareIcon color={theme === 'dark' ? 'white' : 'black'} />
							</li>
							<li className='users__icon'>
								<StatisticsIcon color={theme === 'dark' ? 'white' : 'black'} />
							</li>
						</ul>
					</div>
				</li>

				<li className='users__item'>
					<img
						className='users__image'
						src={User2}
						alt='cloutexhibition img'
						width='60'
						height='60'
					/>
					<div className='users__info'>
						<strong className='users__name'>cloutexhibition</strong>
						<a className='users__account' href='mailto:@RajLahoti · 22m'>
							@RajLahoti · 22m
						</a>

						<Ellipsis />
						<p className='users__post'>
							YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda.
							Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini
							ko’rib hursand bo’ladi odam.
						</p>

						<ul className='users__icons'>
							<li className='users__icon'>
								<CommentIcon color={theme === 'dark' ? 'white' : 'black'} />
							</li>
							<li className='users__icon'>
								<RetweetIcon color={'#0cb245'} />
							</li>
							<li className='users__icon'>
								<LikeIcon color={'#ef1c5c'} />
							</li>
							<li className='users__icon'>
								<ShareIcon color={theme === 'dark' ? 'white' : 'black'} />
							</li>
							<li className='users__icon'>
								<StatisticsIcon color={theme === 'dark' ? 'white' : 'black'} />
							</li>
						</ul>
					</div>
				</li>

				<li className='users__item'>
					<img
						className='users__image'
						src={User3}
						alt='CreativePhoto img'
						width='60'
						height='60'
					/>
					<div className='users__info'>
						<strong className='users__name'>CreativePhoto</strong>

						<a className='users__account' href='mailto:@cloutexhibition · 1h'>
							@cloutexhibition · 1h
						</a>

						<Ellipsis />

						<p className='users__post'>
							Обетда..... <br /> Кечиринглар
						</p>

						<img
							className='hero__user-halved'
							src={HalvedImage}
							alt='Halved img'
							width='679'
							height='453'
						/>
						<ul className='users__icons'>
							<li className='users__icon'>
								<CommentIcon color={theme === 'dark' ? 'white' : 'black'} />
							</li>
							<li className='users__icon'>
								<RetweetIcon color={theme === 'dark' ? 'white' : 'black'} />
							</li>
							<li className='users__icon'>
								<LikeIcon color={theme === 'dark' ? 'white' : 'black'} />
							</li>
							<li className='users__icon'>
								<ShareIcon color={theme === 'dark' ? 'white' : 'black'} />
							</li>
							<li className='users__icon'>
								<StatisticsIcon color={theme === 'dark' ? 'white' : 'black'} />
							</li>
						</ul>
					</div>
				</li>

				{todos.map((todo) => (
					<li className='users__item'>
						<img
							className='users__image'
							src={User}
							alt='Designsta img'
							width='60'
							height='60'
						/>
						<div className='users__info'>
							<strong className='users__name'>Bobur</strong>
							<a className='users__account' href='mailto:@bobur_mavlonov'>
								@bobur_mavlonov
							</a>

							<Ellipsis />
							<p className='users__post'>{todo.post}</p>

							<ul className='users__icons'>
								<li className='users__icon'>
									<CommentIcon color={theme === 'dark' ? 'white' : 'black'} />
								</li>
								<li className='users__icon'>
									<RetweetIcon color={theme === 'dark' ? 'white' : 'black'} />
								</li>
								<li className='users__icon'>
									<LikeIcon color={theme === 'dark' ? 'white' : 'black'} />
								</li>
								<li className='users__icon'>
									<ShareIcon color={theme === 'dark' ? 'white' : 'black'} />
								</li>
								<li className='users__icon'>
									<StatisticsIcon
										color={theme === 'dark' ? 'white' : 'black'}
									/>
								</li>
							</ul>
						</div>
					</li>
				))}
			</ul>
		</>
	)
}

export default Todos
