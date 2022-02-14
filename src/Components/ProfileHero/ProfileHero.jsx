import './ProfileHero.scss'
import { Routes, Route, NavLink } from 'react-router-dom'
import ProfileTweets from '../ProfileTweets/ProfileTweets.jsx'
import ProfileReplice from '../ProfileReplice/ProfileReplice.jsx'
import ProfileMedia from '../ProfileMedia/ProfileMedia.jsx'
import ProfileLikes from '../ProfileLikes/ProfileLikes.jsx'

import content from '../../Localization/Content.js'
import useLang from '../../Hooks/useLang.js'
import useTheme from '../../Hooks/useTheme.js'

import ProfileImage from '../../Assets/Images/profile_hero.png'
import ProfileUser from '../../Assets/Images/user.png'

import LocationIcon from '../Lib/Location.jsx'
import LinkIcon from '../Lib/Link.jsx'
import ClockIcon from '../Lib/Clock.jsx'
import CalendarIcon from '../Lib/Calendar.jsx'
import PinnedIcon from '../Lib/Pinned.jsx'

function ProfileHero() {
	const [lang] = useLang()
	const [theme] = useTheme()

	return (
		<>
			<section className={`profile-hero ${theme === 'dark' && 'dark'}`}>
				<img src={ProfileImage} alt='User img' width='910' height='280' />

				<div className='profile-hero__content'>
					<div className='profile-hero__user'>
						<img
							className='profile-hero__user-image'
							src={ProfileUser}
							alt='User img'
							width='150'
							height='150'
						/>

						<button className='profile-hero__user-profile--btn'>
							{content[lang].profile.hero.edit}
						</button>

						<strong className='profile-hero__user-name'>
							Bobur <br />
						</strong>

						<a
							className='profile-hero__user-account'
							href='mailto:@bobur_mavlonov'>
							@bobur_mavlonov
						</a>

						<p className='profile-hero__user-position'>
							UX&UI designer at &nbsp;
							<a href='mailto:@abutechuz' className='profile-hero__user-link'>
								@abutechuz
							</a>
						</p>

						<ul className='profile-hero__user-infos'>
							<li className='profile-hero__user-info'>
								<LocationIcon />
								Joined May 2020
							</li>

							<li className='profile-hero__user-info'>
								<LinkIcon />
								<a href='#link' className='profile-hero__user-link'>
									t.me/boburjon_mavlonov
								</a>
							</li>

							<li className='profile-hero__user-info'>
								<ClockIcon />
								Born November 24, 2000
							</li>

							<li className='profile-hero__user-info'>
								<CalendarIcon />
								Joined May 2020
							</li>
						</ul>

						<ul className='profile-hero__user-follows'>
							<li className='profile-hero__user-follow'>
								<strong>67</strong>{' '}
								<span className='profile-hero__user-follow--text'>
									Following
								</span>
							</li>
							<li className='profile-hero__user-follow'>
								<strong>47</strong>{' '}
								<span className='profile-hero__user-follow--text'>
									Followers
								</span>
							</li>
						</ul>

						<ul className='profile-hero__user-menu--list'>
							<li className='profile-hero__user-menu--item'>
								<NavLink className='profile-hero__user-menu--link' to='tweets'>
									{content[lang].profile.hero.menu.link1}
								</NavLink>
							</li>
							<li className='profile-hero__user-menu--item'>
								<NavLink className='profile-hero__user-menu--link' to='replice'>
									{content[lang].profile.hero.menu.link2}
								</NavLink>
							</li>
							<li className='profile-hero__user-menu--item'>
								<NavLink className='profile-hero__user-menu--link' to='media'>
									{content[lang].profile.hero.menu.link3}
								</NavLink>
							</li>
							<li className='profile-hero__user-menu--item'>
								<NavLink className='profile-hero__user-menu--link' to='likes'>
									{content[lang].profile.hero.menu.link4}
								</NavLink>
							</li>
						</ul>
					</div>

					<div className='profile-hero__pinned'>
						<PinnedIcon color={theme === 'dark' ? '#148f9d' : 'black'} />
						<h3 className='profile-hero__pinned-text'>Pinned Tweet</h3>
					</div>

					<Routes>
						<Route path='tweets' element={<ProfileTweets />} />
						<Route path='replice' element={<ProfileReplice />} />
						<Route path='media' element={<ProfileMedia />} />
						<Route path='likes' element={<ProfileLikes />} />
					</Routes>
				</div>
			</section>
		</>
	)
}

export default ProfileHero
