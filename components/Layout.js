import React from 'react'
import { Link, browserHistory } from 'react-router'
import Footer from './Footer'

const Layout = ({children}) => (
	<div>
		<header>
			header
			<Link to="/">Top</Link>
			{' '}
			<Link to="/home">Home</Link>
		</header>
		<div>{children}</div>
		<Footer />
	</div>
)

export default Layout