import React from 'react';

import { Context } from '../Context/Theme.jsx';

function useTheme() {
	const ctx = React.useContext(Context);

	return [ctx.state, ctx.setState];
}

export default useTheme;
