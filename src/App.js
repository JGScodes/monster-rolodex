// import React, {Component} from 'react';
// import {CardList} from './components/card-list/card-list.component.jsx';
// import {SearchBox} from './components/search-box/search-box.component';
import React from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends React.Component {
   constructor (props) {
     super(props);
     this.state = {
       monsters: [],
       searchField: ''
     }
   }

   componentDidMount() {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(users => this.setState({monsters: users}))
   }

   handleChange = (e) => {
     this.setState({searchField: e.target.value})
   }

   render() {
    //  const monsters = this.state.monsters;
    //  const searchField = this.state.searchField;
    // the destructuring here is the same as defining constants above
     const { monsters, searchField} = this.state;
     const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
      return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange} />
          <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}
export default App;
