import './Home.scss';

import Menu from '../../Components/Menu/Menu.jsx';
import Main from '../../Components/Main/Main.jsx';
import Aside from '../../Components/Aside/Aside.jsx';

function Home() {
	return (
		<>
			<div className='container'>
				<Menu />

				<Main />

				<Aside />
			</div>
		</>
	);
}

export default Home;
