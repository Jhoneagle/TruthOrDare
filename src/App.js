import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import MainView from './scenes/MainView';
import AddView from './scenes/AddView';
import store from './store';
import { Provider } from 'react-redux';

export default class App extends Component {
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