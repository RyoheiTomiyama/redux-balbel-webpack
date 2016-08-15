import { connect } from 'react-redux'
import { getPosts } from '../actions'
import Main from '../components/Main'

const mapStateToProps = (state, ownProps) => {
  return {
    browser: state.browser,
    isOpen: state.header.isOpen,
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(getPosts());
    }
  }
}

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default MainContainer