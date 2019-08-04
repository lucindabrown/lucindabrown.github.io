import React, { Component } from 'react';
import './App.css';
import School from './School/School';

class App extends Component {
  state = {
    schools: [
       ],
    stops: [
    ]
  };


  componentDidMount() {
    fetch('https://lucindabrown.github.io/magnetfinder/data/schools.json')
    .then(res => res.json())
    .then((data) => {
      this.setState({ schools: data });
    })
    .catch(console.log);
  }

 toggleNeighborhood = (event) => {
    //this.setState( {
    //  persons: [
    //    { name: 'Max', age: 28 },
    //   { name: event.target.value, age: 29 },
    //    { name: 'Stephanie', age: 26 }
    //  ]
    // } )
  }

  
  render () {
    const style = {
      backgroundColor: 'rgb(42, 103, 255)',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={() => this.toggleNeighborhood()}>Switch Name</button>
        
      </div>
    );
      }
}

export default App;
