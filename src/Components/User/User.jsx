import './User.scss'
import UserImg from '../../Assets/Images/user.png'

import Ellipsis from '../Lib/Ellipsis.jsx'
import useTheme from '../../Hooks/useTheme.js'

function User() {
	const [theme] = useTheme()

	return (
		<>
			<div className={`user ${theme === 'dark' && 'dark'}`}>
				<img
					className='user__img'
					src={UserImg}
					alt='User img'
					width='60'
					height='60'
				/>

				<div className='user__info'>
					<strong className='user__name'>Bobur</strong> <br />
					<a className='user__account' href='mailto:@bobur_mavlonov'>
						@bobur_mavlonov
					</a>
				</div>

				<Ellipsis color={'black'} />
			</div>
		</>
	)
}

export default User
