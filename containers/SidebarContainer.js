import { connect } from 'react-redux'
import { toggleDrawer } from '../actions'
import Sidebar from '../components/Sidebar'

const mapStateToProps = (state, ownProps) => {
  return {
    state: state.header
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(toggleDrawer());
    }
  }
}

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default SidebarContainer