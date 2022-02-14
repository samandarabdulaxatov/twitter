import React from 'react';

import { Context } from '../Context/Language.jsx';

function useLang() {
	const ctx = React.useContext(Context);

	return [ctx.state, ctx.setState];
}

export default useLang;
