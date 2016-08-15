const progress = (state = false, action) => {
	switch(action.type) {
		case 'FETCH_POSTS': {
			return true
		}
		case 'FETCH_POSTS_SUCCESS': {
			return false
		}
		case 'FETCH_POSTS_FAILURE': {
			return false
		}
		default: {
			return state
		}
	}
}

export default progress