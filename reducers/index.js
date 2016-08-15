import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import {responsiveStateReducer} from 'redux-responsive'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import visibilityCounter from './visibilityCounter'
import header from './header'
import posts from './posts'
const todoApp = combineReducers({
	todos,
	visibilityFilter,
	visibilityCounter,
	header,
	posts,
	routing: routerReducer,
	browser: responsiveStateReducer,
})

export default todoApp