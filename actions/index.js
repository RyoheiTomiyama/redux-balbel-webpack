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