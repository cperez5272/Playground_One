import React from 'react';
import './App.css';

class Counter extends React.Component {
  constructor () {
    super()
    this.state = {
      count: 0
    }
  }

  addOne = () => {
    this.setState ({
      count: this.state.count +1
    })
    console.log('plus', this.state.count)
  }

  minusOne = () => {
    this.setState ({
      count: this.state.count - 1
    })
    console.log('minus')
  }

  reset = () => {
    this.setState({
      count: 0
    })
    console.log('restart')
  }

  template = () => {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick= {this.addOne}>Add a Number</button>
        <button onClick={this.minusOne}>Substract a Number</button>
        <button onClick={this.reset}>Restart Button</button>
      </div>
    )
  }

  render() {
    console.log('fuck a react')

    return (
      <div>
        {this.template()}
      </div>
    )
  }
}

export default Counter;