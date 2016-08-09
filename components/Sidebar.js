import React, {PropTypes} from 'react'

const Sidebar = ({state,onClick}) => (
	<div>sidebar</div>
)

Sidebar.propTypes = {
	state: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired
};


export default Sidebar