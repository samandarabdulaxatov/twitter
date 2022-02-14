import './Menu.scss'

import Logo from '../Logo/Logo.jsx'
import Nav from '../Nav/Nav.jsx'
import Button from '../Button/Button.jsx'
import User from '../User/User.jsx'

function Menu() {
	return (
		<>
			<div className='menu-section'>
				<Logo />

				<Nav />

				<Button />

				<User />
			</div>
		</>
	)
}

export default Menu
