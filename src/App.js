import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      title: 'Indecision App',
      subtitle: 'This is a subtitle',
      options: [],
    }
  }

  // click handler
  renderForm = () => {
    this.setState({
      options: this.state.options
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    const option = event.target.elements.option.value

    if (option) {
      this.state.options.push(option)
      event.target.elements.option.value = '';
      console.log(this.state.options.length)
      this.renderForm()
    }
  }

  removeAll = () => {
    this.setState({
      options: []
    })
  }

  // mapping arrays
  numberArray = () => {
    return [10, 45, 60]
  }

  numbers = () => {
    return this.numberArray().map(number => {
      return <p key={number}> Number: {number * 2}</p>
    })
  }

  displayOptions = () => {
    return this.state.options
  }

  mapOptions = () => {
    return this.displayOptions().map(option => {
      return <li key={option}> Read: {option}</li>
    })
  }

  //disable button

  makeDecision = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)
    const decision = this.state.options[randomNum]
    alert(decision)
  }

  template = () => {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.subtitle}</p>
        <p>{this.optionCheck()}</p>
        <p>{this.state.options.length > 0 ? 'Here are your options' : 'there are no options'} </p>
        <p>{this.state.options.length}</p>
        {this.numbers()}

        <ol>
          {this.mapOptions()}
        </ol>
        <form onSubmit={this.onFormSubmit}>
          <input type='text' name='option' />
          <button>Add Button</button>
          <button onClick={this.removeAll}>Remove All</button>
          <button disabled= {this.state.options.length === 0} onClick={this.makeDecision}>What should I do?</button>
        </form>
      </div>
    )
  }

  render() {

    console.log(this.numbers())

    return (
      <div>
        {this.template()}
      </div>
    )
  }
}


export default App;
