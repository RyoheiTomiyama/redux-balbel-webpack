import { connect } from 'react-redux'
import { toggleDrawer } from '../actions'
import Home from '../components/Home'

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts
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
)(Home)

export default HeaderContainer