import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import visibilityCounter from './visibilityCounter'
const todoApp = combineReducers({
	todos,
	visibilityFilter,
	visibilityCounter
})

export default todoApp