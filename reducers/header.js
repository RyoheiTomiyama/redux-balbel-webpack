const initialState = {
	isOpen: true
};
const drawer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_DRAWER': {
			return Object.assign({}, state, {
				isOpen: !state.isOpen
			})
		}
	}
};
const header = (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_DRAWER': {
			return drawer(state, action);
		}
		default:
			return state
	}
}

export default header