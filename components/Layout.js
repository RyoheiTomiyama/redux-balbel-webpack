import React from 'react'
import { Link, browserHistory } from 'react-router'
import Header from '../containers/HeaderContainer'
import Footer from './Footer'
import Main from '../containers/MainContainer'

const Layout = ({children}) => (
	<div>
		<Header />
		<Main>
			{children}
			<Footer />
		</Main>
	</div>
)

export default Layout