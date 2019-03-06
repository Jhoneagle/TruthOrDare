import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import MainView from './scenes/MainView';
import AddView from './scenes/AddView';
import store from './Store';
import { Provider, connect } from 'react-redux';
import { initializeQuestions } from './reducers/questionsReducer'

class App extends Component {
  componentDidMount() {
    this.props.initializeQuestions()
  }
  
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="mainPage" component={MainView} initial={true} hideNavBar={true}/>
            <Scene key="addFormPage" component={AddView} hideNavBar={true}/>
          </Scene>
        </Router>
      </Provider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }
};

const ConnectedApp = connect(mapStateToProps, { initializeQuestions })(App);

export default ConnectedApp