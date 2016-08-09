import React, {PropTypes} from 'react'
import {AppBar, Drawer as DrawerUi, IconButton} from 'material-ui';
import KeyboardBackspace from 'material-ui/svg-icons/hardware/keyboard-backspace';
const IconLeft = ({onTouchTap}) => {

	return (
		<IconButton
			onTouchTap = {onTouchTap}
		>
			<KeyboardBackspace
				color = "white"
			/>
		</IconButton>
	)
}
const Drawer = ({isOpen, onTouchTap}) => (
	<DrawerUi
		open = {isOpen}
		onTouchTap = {onTouchTap}
		// docked={false}
		// onRequestChange= {onTouchTap}
	>
		<AppBar
			title="めぬー"
			onLeftIconButtonTouchTap = {() => {console.log("y9ge");onTouchTap()}}
			// iconElementLeft = {<IconButton onTouchTap = {onTouchTap}><KeyboardBackspace /></IconButton>}
			iconElementLeft = {<IconLeft onTouchTap = {onTouchTap} />}
			iconClassNameRight="muidocs-icon-navigation-expand-more"
		/>
	</DrawerUi>
);

Drawer.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	onTouchTap: PropTypes.func.isRequired
};

export default Drawer