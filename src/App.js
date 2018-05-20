import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

    state = {
        persons: [
            {
                name: 'Dave',
                age: 28
            },
            {
                name: 'Helen',
                age: 29
            },
            {
                changed: ''
            }
        ]
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {
                    name: newName,
                    age: 7
                },
                {
                    name: 'Aslan',
                    age: 8
                }
            ]
        })
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {
                    name: event.target.value,
                    age: 7
                },
                {
                    name: 'Aslan',
                    age: 8
                }
            ]
        })
    };

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>React App</h1>
                <button
                    style={style}
                    onClick={this.switchNameHandler.bind(this, 'Aberforth')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    click={this.switchNameHandler.bind(this, 'Dingle')}
                    changed={this.nameChangedHandler}>I'm doing react right now</Person>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Swindle')}
                    changed={this.nameChangedHandler}>(She isn't. She's asleep.)</Person>
            </div>
        );
    }
}

export default App;
