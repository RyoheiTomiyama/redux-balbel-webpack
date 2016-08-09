import { connect } from 'react-redux'
import { toggleDrawer } from '../actions'
import Header from '../components/Header'

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

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer