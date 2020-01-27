import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "dfjhdjf", age: 29 },
      { id: 2, name: "dfdf", age: '30' },
    ],
    otherState: "some other value"
  }

  switchNameHandler = (newName) => {
    // console.log("was licked");
    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: "2", age: 31 },
      ],
      showPersons: false
    })
  }

  nameChangedHandler = (event, id) => {
    const persons = [...this.state.persons];
    const personID = persons.findIndex(p => {
      return p.id === id;
    })

    const person = persons[personID];
    person.name = event.target.value;
    persons[personID] = person
    this.setState({
      persons: persons
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }
  render() {
    let btnClass ='';
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
            />
          })}
        </div>
      );
      btnClass = classes.red;
    }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>Fuck you in the ass.</h1>
          <p className={assignedClasses.join(' ')}>This is really working.</p>
          <button 
            className={btnClass }
            onClick={this.togglePersonHandler}> Toggle Persons</button>
          {persons}
        </div>

    );
  }
}

export default App;
