import axios from 'axios'
let nextTodoId = 0
export const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text
	}
}
export const setVisibilityFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	}
}
export const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	}
}



export const upCount = () => {
	return {
		type: 'UP_COUNT'
	}
}

export const downCount = () => {
	return {
		type: 'DOWN_COUNT'
	}
}

// Drawer出し入れ
export const toggleDrawer = () => {
	return {
		type: 'TOGGLE_DRAWER'
	}
}
export const openDrawer = () => {
	return {
		type: 'OPEN_DRAWER'
	}
}
export const closeDrawer = () => {
	return {
		type: 'CLOSE_DRAWER'
	}
}


export const fetchPosts = () => {
	return {
		type: 'FETCH_POSTS'
	}
}
export const fetchPostsFailure = (err) => {
	return {
		type: 'FETCH_POSTS_FAILURE',
		err
	}
}
export const fetchPostsSuccess = (response) => {
	return {
		type: 'FETCH_POSTS_SUCCESS',
		response
	}
}

export const getPosts = () => (
	dispatch => {
		dispatch(fetchPosts())
		axios.get('/api/posts')
		.then((response) => {
			dispatch(fetchPostsSuccess(response))
		})
		.then((err) => {
			if(!!err){
				dispatch(fetchPostsFailure(err))
			}
		})
	}
)