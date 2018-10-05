import React, { Component } from 'react';
import './App.css';
import Formulaire from'./components/Formulaire';
import { Input } from 'antd';

class App extends Component {
  state = {
    num: 0 
  }

  handleChange = event => {
    const num = event.target.value
    this.setState({ num })
    console.log(num)
  }

  render() {
    return (
      <div className="App">
        <h1>Exercices</h1>
        <Input
        value={this.state.num}
        onChange={this.handleChange}
        type='number'
        min='0'
        max='7'
        addonBefore='Num'
        style={{
          width: '160px',
          marginBottom: '16px'
        }}
        />
          <Formulaire num={this.state.num} />
      </div>
    );
  }
}

export default App;
