import useTheme from '../../Hooks/useTheme.js'

import UserImage from '../../Assets/Images/img.png'
import ProfileUser from '../../Assets/Images/user.png'

import Ellipsis from '../Lib/Ellipsis.jsx'
import CommentIcon from '../Lib/Comment.jsx'
import RetweetIcon from '../Lib/Retweet.jsx'
import LikeIcon from '../Lib/Like.jsx'
import ShareIcon from '../Lib/Share.jsx'
import StatisticsIcon from '../Lib/Statistics.jsx'

function ProfileTweets() {
	const [theme] = useTheme()

	return (
		<>
			<ul className='profile-hero__user-tweets'>
				<li className='profile-hero__user-tweet'>
					<img src={ProfileUser} alt='User img' width='60' height='60' />

					<div className='profile-hero__user-tweet--info'>
						<strong className='users__name'>Bobur</strong>
						<a className='users__account' href='mailto:@RajLahoti · 22m'>
							@bobur_mavlonov · Apr 1
						</a>

						<Ellipsis />
						<p className='users__post'>
							4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish
							uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va
							jismoniy holatni normallashtirishni reja qildim
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

				<li className='profile-hero__user-tweet'>
					<img src={ProfileUser} alt='User img' width='60' height='60' />

					<div className='profile-hero__user-tweet--info'>
						<strong className='users__name'>Bobur</strong>
						<a className='users__account' href='mailto:@RajLahoti · 22m'>
							@bobur_mavlonov · Apr 1
						</a>

						<Ellipsis />

						<p className='users__post'>
							Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima
							deyayotganimizga qarab ham o'tirmaymiz.
						</p>

						<p className='users__post'>
							Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar
							yomonga chiqadi slishkom aqlli odamlar nazdida.
						</p>

						<p className='users__post'>
							Gap faqat biznes trenerlar haqida emas.
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

				<li className='profile-hero__user-tweet'>
					<img src={ProfileUser} alt='User img' width='60' height='60' />

					<div className='profile-hero__user-tweet--info'>
						<strong className='users__name'>Bobur</strong>
						<a className='users__account' href='mailto:@RajLahoti · 22m'>
							@bobur_mavlonov · Apr 1
						</a>

						<Ellipsis />
						<p className='users__post'>A bo'pti maskamasman</p>

						<img src={UserImage} alt='User img' width='679' height='453' />

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
			</ul>
		</>
	)
}

export default ProfileTweets
