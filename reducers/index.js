import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import visibilityCounter from './visibilityCounter'
import header from './header'
const todoApp = combineReducers({
	todos,
	visibilityFilter,
	visibilityCounter,
	header,
	routing: routerReducer
})

export default todoApp