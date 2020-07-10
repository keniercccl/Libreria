import React from 'react';
import './styles/App.css';
import Menu from './componets/Menu'
import List from './componets/List'
// import { render } from '@testing-library/react';
// import List from './componets/List'

class App extends React.Component {

    constructor (props){
      super(props);
      this.state ={
        books : [
          {id:0, rating: 4, title: 'Harry Potter y el càliz de fuego', image: 'libro01.jpg'},
          {id:1, rating: 3, title: 'The Shinnig', image: 'libro02.jpg'},
          {id:2, rating: 2, title: 'Còdigo Da Vinci', image: 'libro03.jpg'},
          {id:3, rating: 5, title: 'El Principito', image: 'libro04.jpg'},
          {id:4, rating: 5, title: 'Sobrenatural', image: 'libro05.jpg'}
        ]
      }
    }

    render(){
      return (
        <div className="app">
          <Menu 
            tittle="Amozon"
          />
          <List 
            items={this.state.books}
          />
        </div>
      );
    }
  }

export default App;
