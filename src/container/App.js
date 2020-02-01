import React, { Component } from 'react';
import './App.css';
import Persons from '../components/persons/Persons';

class App extends Component {
  state = {
    persons: [
      { id: "a", name: 'Max', age: 28 },
      { id: "b", name: 'Sam', age: 25 },
      { id: "c", name: 'Stephanie', age: 30 }
    ],
    otherState: "Some other value",
    showPersons: true
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    // const person = this.state.persons; --> This is bad coz, it changes/mutates the original state. We should never mutate the original state. NEVER! To fix this, we create a copy of the original state like below

    const person = [...this.state.persons]; // We can also use 'this.state.persons.slice()' instead of using spread operator
    person.splice(personIndex, 1);
    this.setState({persons: person})
    // console.log(this.state.persons);
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) { 
      persons = (
        <div>
          <Persons 
            persons = {this.state.persons} 
            clicked = {this.deletePersonHandler} 
            changed = {this.nameChangeHandler} />
        </div>
      );

      style.backgroundColor = 'red';
    }

    return (
      <div className = "App">

        <h1>React</h1> <br />
        <button 
          style = { style } 
          onClick={this.togglePersonsHandler}>Switch Name
        </button> <br /> <br />

        { persons }

      </div>
    )
  }
}

export default App;