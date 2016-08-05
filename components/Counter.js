import React, { PropTypes } from 'react'

const Counter = ({ count, onUp, onDown }) => {
	// console.log(counter)
	return (
		<div>
			{count}
			<button
				onClick = { () => onUp() }
			>Up!</button>

			<button
				onClick = { () => onDown() }
			>Down!</button>
		</div>
	)
}

Counter.propTypes = {
	count: PropTypes.number.isRequired,
	onUp: PropTypes.func.isRequired,
	onDown: PropTypes.func.isRequired
}

export default Counter

