import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducers from './reducers'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {cyan100, cyan500, cyan700} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton'
import Header from './containers/HeaderContainer'
import Main from './components/Main'
import Layout from './components/Layout'
import App from './components/App'
import Home from './components/Home'

// materialUIに必要
injectTapEventPlugin();
const muiTheme = getMuiTheme({
	palette: {
		primary1Color: cyan500,
		primary2Color: cyan700,
		primary3Color: cyan100,
	},
})

let store = createStore(reducers)
// let store = createStore(
// 	combineReducers({
// 		reducers,
// 		routing: routerReducer
// 	})
// )
const history = syncHistoryWithStore(browserHistory, store)

import styles from './css/modules.css';

render(
	<Provider store={store}>
		<MuiThemeProvider muiTheme={muiTheme} >
			<div className={styles.className} >
				<Header />
				<Main />
				<Router history={history}>
					<Route path="/" component={Layout}>
						<IndexRoute component={App} />
						<Route path="home" component={Home} />
					</Route>
				</Router>
				<RaisedButton label="default" className={styles.hoge} />
			</div>
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
)
