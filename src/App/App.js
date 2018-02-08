import React, { Component } from 'react';
import './App.css';
import One from '../pages/One/One'

class App extends Component {
  constructor(props,context) {
    super(props,context)
    this.state = {
      flag:true
    }
  }
  render() {
    const arr = [1,2,3]
    return (
      <div className="App">
        <One />
        { arr.map((item, index) => { return <p key={index}>this is {item}</p> }) }
      </div>
    );
  }
}

export default App;
