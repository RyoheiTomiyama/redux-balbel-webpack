import { connect } from 'react-redux'
import { toggleDrawer } from '../actions'
import Main from '../components/Main'

const mapStateToProps = (state, ownProps) => {
  return {
    browser: state.browser,
    isOpen: state.header.isOpen
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(toggleDrawer());
    }
  }
}

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default MainContainer