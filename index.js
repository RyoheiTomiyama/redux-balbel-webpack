import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducers from './reducers'
import Layout from './components/Layout'
import App from './components/App'
import Home from './components/Home'

let store = createStore(reducers)
// let store = createStore(
// 	combineReducers({
// 		reducers,
// 		routing: routerReducer
// 	})
// )
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
  	<div>
  		<Router history={history}>
  			<Route path="/" component={Layout}>
  				<IndexRoute component={App} />
  				<Route path="home" component={Home} />
  			</Route>
  		</Router>
  	</div>
  </Provider>,
  document.getElementById('root')
)
