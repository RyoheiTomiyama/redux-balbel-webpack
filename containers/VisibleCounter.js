import { connect } from 'react-redux'
import { upCount, downCount } from '../actions'
import Counter from '../components/Counter'

const mapStateToProps = (state) => {
  return {
    count: state.visibilityCounter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUp: () => {
      dispatch(upCount())
    },
    onDown: () => {
      dispatch(downCount())
    }
  }
}

const VisibleCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default VisibleCounter
