import React, {PropTypes} from 'react'
// import Sidebar from './Sidebar'

import styles from '../css/modules.css';

const Main = ({isOpen}) => {
	return (
		<div className={styles.open}>
		ほげ
		</div>
	)
}

Main.PropTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default Main