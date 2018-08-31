import React, { Component } from 'react';
import './index.css';
import store from '../components/store.js'

import {
 Clock,
 CountInfo,
 StartButton,
 EndButton,
} from '../components'

class App extends Component {

  constructor() {
    super()

    console.log('in constructor store: ', store)
  }

  render() {
    return (
      <div className="App">
        <div className="main_container">
          <Clock />
          <CountInfo
            store={ store }
          />
          <CountInfo 
            store={ store } 
          />
          <div className="button_container">
            <StartButton />
            <EndButton />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
