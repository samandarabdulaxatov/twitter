import React from 'react';

import Context from '../Context/Todo.jsx';

function useTodo() {
	const ctx = React.useContext(Context);

	return [ctx.state, ctx.setState];
}

export default useTodo;
