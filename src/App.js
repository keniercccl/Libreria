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
          {id:1, rating: 1, title: 'The Shinnig', image: 'libro02.jpg'},
          {id:2, rating: 2, title: 'Còdigo Da Vinci', image: 'libro03.jpg'},
          {id:3, rating: 1, title: 'El Principito', image: 'libro04.jpg'},
          {id:4, rating: 1, title: 'Sobrenatural', image: 'libro05.jpg'}
        ],
        copyBooks : []
      }
    }

    componentDidMount () {
      this.initBooks();
    }

    initBooks = () => {
      this.setState((state,props) => ({
        copyBooks : [...state.books]
      }));
    }

    onAdd = (item) => {
      let temp = [...this.state.books];
      let id = temp[temp.length-1].id+1;
      item['id'] = id;
      temp.unshift(item);
      this.setState({books : [...temp]});
      this.initBooks();
    }

    onSearch = (query) => {
      if (query === ''){
        this.initBooks();
      } else {
        const temp = [... this.state.books];
        let res = [];

        temp.forEach(item => {
          if (item.title.toLocaleLowerCase().indexOf(query) > -1){
            res.push(item);
          }
        });
        this.setState({copyBooks : [...res]});
      }
    }

    onUpdateRating = (item) => {
      let temp = [... this.state.books];
      const index = temp.findIndex(x => x.id === item.id);

      temp[index].title = item.title;
      temp[index].image = item.image;
      temp[index].rating = item.rating;

      this.setState({books : [... temp]})
      this.initBooks();
    }

    onRemove = (item) => {
      let temp = [...this.state.books];
      const res = temp.filter(x => x.id !== item);
      this.setState({books : [... res]})
      this.initBooks();
    }

    render(){
      return (
        <div className="app">
          <Menu 
            tittle="Amozon"
            onAdd = {this.onAdd}
            onSearch = {this.onSearch}
          />
          <List 
            items={this.state.copyBooks}
            onUpdateRating = {this.onUpdateRating}
            onRemove = {this.onRemove}
          />
        </div>
      );
    }
  }

export default App;
