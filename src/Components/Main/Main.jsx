import React from 'react'
import './Main.scss'
import Header from '../Header/Header.jsx'
import Hero from '../Hero/Hero.jsx'
import Todos from '../Todos/Todos.jsx'

function Main() {
	const [todos, setTodos] = React.useState(
		JSON.parse(window.localStorage.getItem('todos')) || [],
	)
	React.useEffect(() => {
		window.localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	return (
		<>
			<div className='main-section'>
				<Header />

				<Hero todos={todos} setTodos={setTodos} />

				<Todos todos={todos} />
			</div>
		</>
	)
}

export default Main
