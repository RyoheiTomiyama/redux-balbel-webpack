const visibilityCounter = (state, action) => {
	switch(action.type) {
		case 'UP_COUNT':
			return action.count++
		case 'DOWN_COUNT':
			return action.count--
		default:
			return state
	}
}
export default visibilityCounter