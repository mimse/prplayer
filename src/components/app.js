import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as playerActions from '../actions/playerActions';
import Main from './Main';

function mapStateToProps(state) {
  return {
    state: state
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(playerActions, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;