import './Images.scss';

import Img from '../../Assets/Images/img.png';
import Img2 from '../../Assets/Images/img2.png';
import Img3 from '../../Assets/Images/img3.png';
import Img4 from '../../Assets/Images/img4.png';
import Img5 from '../../Assets/Images/img5.png';
import Img6 from '../../Assets/Images/img6.png';

function Images() {
	return (
		<>
			<ul className='images__list'>
				<li className='image__item'>
					<img src={Img} alt='Profile img' width='123' height='88' />
				</li>
				<li className='image__item'>
					<img src={Img2} alt='Profile img' width='123' height='88' />
				</li>
				<li className='image__item'>
					<img src={Img3} alt='Profile img' width='123' height='88' />
				</li>
				<li className='image__item'>
					<img src={Img4} alt='Profile img' width='123' height='88' />
				</li>
				<li className='image__item'>
					<img src={Img5} alt='Profile img' width='123' height='88' />
				</li>
				<li className='image__item'>
					<img src={Img6} alt='Profile img' width='123' height='88' />
				</li>
			</ul>
		</>
	);
}

export default Images;
