const bool = localStorage.getItem('drawer') == "true"? true : false
console.log(bool);
const initialState = {
	isOpen: bool
};
const drawer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_DRAWER': {
			localStorage.setItem('drawer', !state.isOpen);
			return Object.assign({}, state, {
				isOpen: !state.isOpen
			})
		}
		case 'OPEN_DRAWER': {
			localStorage.setItem('drawer', true);
			return Object.assign({}, state, {
				isOpen: true
			})
		}
		case 'CLOSE_DRAWER': {
			localStorage.setItem('drawer', true);
			return Object.assign({}, state, {
				isOpen: false
			})
		}
	}
};
const header = (state = initialState, action) => {
	switch (action.type) {
		case 'TOGGLE_DRAWER': {
			return drawer(state, action);
		}
		case 'OPEN_DRAWER': {
			return drawer(state, action);
		}
		case 'CLOSE_DRAWER': {
			return drawer(state, action);
		}
		default:
			return state
	}
}

export default header