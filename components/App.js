import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import VisibleCounter from '../containers/VisibleCounter'

const App = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
    	<VisibleCounter />
		<Footer />
	</div>
)

export default App