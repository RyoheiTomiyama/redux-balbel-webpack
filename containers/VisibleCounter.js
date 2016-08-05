import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import Counter from '../components/Counter'

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchUpToProps = (dispatch) => {
  return {
    onUp: () => {
      dispatch(upCount())
    }
  }
}

const mapDispatchDownToProps = (dispatch) => {
  return {
    onDown: () => {
      dispatch(downCount())
    }
  }
}

const VisibleCounter = connect(
  mapStateToProps,
  mapDispatchUpToProps,
  mapDispatchDownToProps
)(Counter)

export default VisibleCounter
