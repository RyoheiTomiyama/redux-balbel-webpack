import React, {PropTypes} from 'react'
import AppBar from 'material-ui/AppBar';
import Drawer from './Drawer';

const styles = {
	appBar : {
		zIndex: 1800
	}
}
const Header = ({state,onClick}) => {
	console.log(state);
	return (
	<header>
		<AppBar
			title="FledgeAdmin"
			iconClassNameRight="muidocs-icon-navigation-expand-more"
			onLeftIconButtonTouchTap = {() => onClick()}
			style = { styles.appBar }
		/>
		{/* <Drawer
				isOpen = {state.isOpen}
				onTouchTap = {() => onClick()}
			/> */}
	</header>
)};

Header.propTypes = {
	state: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Header