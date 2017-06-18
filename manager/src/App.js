import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAVtDY4qr2kdlJxe8_YsdkjrLP06JKHHIE',
      authDomain: 'manager-fd5a7.firebaseapp.com',
      databaseURL: 'https://manager-fd5a7.firebaseio.com',
      projectId: 'manager-fd5a7',
      storageBucket: 'manager-fd5a7.appspot.com',
      messagingSenderId: '910008183365'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
