import React, {PropTypes} from 'react'
// import Sidebar from './Sidebar'
// import {getPosts} from '../actions'
import { Link } from 'react-router'

import styles from '../css/modules.css';

// const Main = ({isOpen, posts, onClick, children}) => {
// 	console.log(posts);
// 	return (
// 		<div className={(() => {
// 					return isOpen? styles.open : styles.close
// 				})()}>
// 			{children}
// 			<button
// 				onClick = {() => {onClick()}}
// 			>hoge</button>
// 		</div>
// 	)
// }

class Main extends React.Component {
	componentDidMount() {
		const {onClick} = this.props
		onClick()
	};
  render() {
  	const {isOpen, posts, onClick, children} = this.props
	console.log(posts);
    return (
    	<div className={(() => {
			return isOpen? styles.open : styles.close
		})()}>
			{children}
			<button
				onClick = {() => {onClick()}}
			>hoge</button>
			<Link to="/home"> HOME </Link>
		</div>
    );
  }
}

Main.PropTypes = {
  isOpen: PropTypes.bool.isRequired,
  posts: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}
export default Main