import './App.css';
import { Component } from 'react';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monstar: [],
      searchField:''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(responce => responce.json())
      .then(users => this.setState({ monstar: users }))
  }

  render() {

            const {monstar , searchField} = this.state;
            const filteredMonstar = monstar.filter(monstar => monstar.name.toLowerCase().includes(searchField.toLowerCase()));


    return (
      <div className='app'>
        <h1>Monstar Rolodex</h1>
        <SearchBox placeholder='Search Monstar'
        handleChange= {e=> {
        this.setState({searchField: e.target.value});}}
      />
        <CardList monstar={filteredMonstar}/>
      
      </div>
    );
  }
}
export default App;