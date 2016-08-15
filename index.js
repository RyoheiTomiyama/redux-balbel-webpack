import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import {responsiveStoreEnhancer} from 'redux-responsive'
import reducers from './reducers'
import thunk from 'redux-thunk'

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {cyan100, cyan500, cyan700} from 'material-ui/styles/colors';

import Header from './containers/HeaderContainer'
import Layout from './components/Layout'
import App from './components/App'
import Home from './containers/HomeContainer'

import { openDrawer, closeDrawer } from './actions'

// materialUIに必要
injectTapEventPlugin();
const muiTheme = getMuiTheme({
	palette: {
		primary1Color: cyan500,
		primary2Color: cyan700,
		primary3Color: cyan100,
	},
})

let store = createStore(reducers, compose(
	responsiveStoreEnhancer,
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
))
// スマホならドロワーを隠す
var getDevice = (function(){
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
        return 'sp';
    }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
        return 'tab';
    }else{
        return 'other';
    }
})();
if(getDevice != 'other'){
	store.dispatch(closeDrawer())
}	else {
	// var bool = localStorage.getItem('drawer');
	// bool ? store.dispatch(openDrawer()) : store.dispatch(closeDrawer())
}
// if(store.getState().browser.device.)
const history = syncHistoryWithStore(browserHistory, store)

import styles from './css/modules.css';

const routes = (
	<Route path="/" component={Layout}>
		<IndexRoute component={App} />
		<Route path="app" component={App} />
		<Route path="home" component={Home} />
	</Route>
);

render(
	<Provider store={store}>
		<MuiThemeProvider muiTheme={muiTheme} >
				<Router history={history}>
					{routes}
				</Router>
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
)
