function MessagesIcon({ color = 'black' }) {
	return (
		<>
			<svg
				width={28}
				height={28}
				viewBox='0 0 28 28'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<mask
					id='mask0_908:146'
					style={{ maskType: 'alpha' }}
					maskUnits='userSpaceOnUse'
					x={0}
					y={0}
					width={28}
					height={28}>
					<rect width={28} height={28} fill='#C4C4C4' />
				</mask>
				<g mask='url(#mask0_908:146)'>
					<path
						d='M22.4583 3.5H5.54159C3.77175 3.5 2.33325 4.93967 2.33325 6.71067V21.2882C2.33325 23.0592 3.77175 24.5 5.54159 24.5H22.4583C24.2281 24.5 25.6666 23.0592 25.6666 21.2882V6.71067C25.6666 4.93967 24.2281 3.5 22.4583 3.5ZM5.54159 5.25H22.4583C23.2633 5.25 23.9166 5.90333 23.9166 6.70833V7.54132L14.5249 13.8028C14.2064 14.0128 13.7946 14.0152 13.4749 13.8005L4.08325 7.54132V6.70833C4.08325 5.90333 4.73659 5.25 5.54159 5.25ZM22.4583 22.7477H5.54159C4.73659 22.7477 4.08325 22.0943 4.08325 21.2893V9.59233L12.5299 15.2273C12.9768 15.526 13.4889 15.6753 13.9999 15.6753C14.5133 15.6753 15.0231 15.526 15.4699 15.2285L23.9166 9.59349V21.2858C23.9166 22.0908 23.2633 22.7442 22.4583 22.7442V22.7477Z'
						fill={color}
					/>
				</g>
			</svg>
		</>
	);
}

export default MessagesIcon;
