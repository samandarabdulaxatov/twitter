import React from 'react';

function CommentIcon() {
	const [count, setCount] = React.useState(0);
	const [fill, setFill] = React.useState('#148f9d');

	return (
		<>
			<svg
				onClick={() => {
					setCount(count + 1);
					setFill('rgb(239, 28, 92)');
				}}
				className='users__icon-svg'
				width={20}
				height={20}
				viewBox='0 0 20 20'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M11.95 0.00999999L7.802 0H7.8C3.426 0 0 3.427 0 7.80201C0 11.9 3.186 15.008 7.465 15.172V19C7.465 19.108 7.509 19.286 7.585 19.403C7.727 19.628 7.96899 19.75 8.21699 19.75C8.35499 19.75 8.49399 19.712 8.61899 19.632C8.88299 19.464 15.092 15.492 16.707 14.126C18.609 12.516 19.747 10.156 19.75 7.81401V7.79701C19.744 3.43 16.32 0.00999982 11.95 0.00899982V0.00999999ZM15.737 12.982C14.603 13.942 10.875 16.387 8.96499 17.625V14.438C8.96499 14.024 8.62999 13.688 8.21499 13.688H7.819C4.159 13.688 1.501 11.212 1.501 7.80201C1.501 4.268 4.269 1.5 7.801 1.5L11.948 1.51H11.95C15.482 1.51 18.25 4.276 18.252 7.80601C18.249 9.71601 17.31 11.65 15.738 12.982H15.737Z'
					fill={fill}
				/>
			</svg>
			<span className='users__icon-click--count'>
				{count !== 0 ? count : ''}
			</span>
		</>
	);
}

export default CommentIcon;
