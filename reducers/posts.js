const posts = (state = [], action) => {
	switch(action.type) {
		case 'FETCH_POSTS_SUCCESS': {
			return action.response.data
		}
		case 'FETCH_POSTS_FAILURE': {
			return []
		}
		default: {
			return state
		}
	}
}

export default posts