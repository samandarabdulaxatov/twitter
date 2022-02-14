import Menu from '../../Components/Menu/Menu.jsx';
import ProfileMain from '../../Components/ProfileMain/ProfileMain.jsx';
import ProfileAside from '../../Components/ProfileAside/ProfileAside.jsx';

function Profile() {
	return (
		<>
			<div className='container'>
				<Menu />

				<ProfileMain />

				<ProfileAside />
			</div>
		</>
	);
}

export default Profile;
