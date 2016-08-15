import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import Layout from './Layout'
import App from './App'
import Home from './Home'

const Routes = () => (
	<Route path="/" component={Layout}>
		<IndexRoute component={App} />
		<Route path="home" component={Home} />
	</Route>
)


export default Routes