import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import MainView from './components/MainView';
import AddView from './components/AddView';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="mainPage" component={MainView} initial={true} hideNavBar={true}/>
          <Scene key="addFormPage" component={AddView} hideNavBar={true}/>
        </Scene>
      </Router>
    )
  }
}