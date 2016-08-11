import React, {PropTypes} from 'react'
// import Sidebar from './Sidebar'

import styles from '../css/modules.css';

const Main = ({isOpen}) => {
	return (
		<div className={(() => {
					return isOpen? styles.open : styles.close
				})()}>
		ほげ
		</div>
	)
}
Main.PropTypes = {
  isOpen: PropTypes.bool.isRequired,
}

export default Main