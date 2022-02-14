function ProfileIcon({ color = 'black' }) {
	return (
		<>
			<svg
				width={28}
				height={28}
				viewBox='0 0 28 28'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<mask
					id='mask0_908:76'
					style={{ maskType: 'alpha' }}
					maskUnits='userSpaceOnUse'
					x={0}
					y={0}
					width={28}
					height={28}>
					<rect width={28} height={28} fill='#C4C4C4' />
				</mask>
				<g mask='url(#mask0_908:76)'>
					<path
						d='M13.2428 14.1867C14.8236 14.1867 16.5935 14.0116 17.7228 12.7213C18.6725 11.6363 18.9805 9.95865 18.6631 7.59731C18.2198 4.30148 16.1933 2.33331 13.2428 2.33331C10.2923 2.33331 8.2658 4.30148 7.82247 7.59965C7.50514 9.95865 7.81315 11.6363 8.76281 12.7213C9.89215 14.0128 11.662 14.1867 13.2428 14.1867ZM9.55614 7.83064C9.74514 6.43064 10.4743 4.08331 13.2428 4.08331C16.0113 4.08331 16.7405 6.43181 16.9295 7.83064C17.171 9.63898 16.996 10.8955 16.4045 11.5698C15.8736 12.1765 14.9275 12.4367 13.2428 12.4367C11.5581 12.4367 10.612 12.1765 10.0811 11.5698C9.48964 10.8955 9.31464 9.63781 9.55614 7.83064ZM22.9028 22.8433C21.8796 18.7296 17.9071 15.855 13.2428 15.855C8.57848 15.855 4.60598 18.7296 3.58281 22.8433C3.38214 23.6506 3.55014 24.4767 4.04364 25.1067C4.51964 25.7133 5.25697 26.0633 6.06547 26.0633H20.4201C21.2286 26.0633 21.966 25.7133 22.442 25.1067C22.9366 24.4767 23.1035 23.6518 22.9016 22.8433H22.9028ZM21.0641 24.0286C20.9171 24.2153 20.6955 24.3157 20.4201 24.3157H6.06547C5.79131 24.3157 5.56847 24.2165 5.42147 24.0286C5.26164 23.8256 5.21148 23.548 5.28148 23.2656C6.10981 19.9348 9.38464 17.6073 13.2428 17.6073C17.101 17.6073 20.3758 19.9336 21.2041 23.2656C21.2741 23.548 21.224 23.8256 21.0641 24.0286Z'
						fill={color}
					/>
				</g>
			</svg>
		</>
	);
}

export default ProfileIcon;
