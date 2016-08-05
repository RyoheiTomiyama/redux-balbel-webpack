import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import visibilityCounter from './visibilityCounter'
const todoApp = combineReducers({
	todos,
	visibilityFilter,
	visibilityCounter,
	routing: routerReducer
})

export default todoApp