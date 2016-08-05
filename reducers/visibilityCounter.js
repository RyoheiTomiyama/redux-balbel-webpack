const visibilityCounter = (state = 0, action) => {
	console.log(state)
	switch(action.type) {
		case 'UP_COUNT':
			return state+1
		case 'DOWN_COUNT':
			if(state > 0){
				return state-1
			} else {
				state
			}
		default:
			return state
	}
}
export default visibilityCounter