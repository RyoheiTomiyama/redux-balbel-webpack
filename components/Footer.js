import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
	<div>
		show:
		{" "}
		<FilterLink filter="SHOW_ALL">ALL</FilterLink>
		{", "}
		<FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
		{", "}
		<FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
	</div>
)

export default Footer