import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css'
import ListBooks from './ListBooks'
import Search from './Search'
import * as BooksAPI from './BooksAPI'


class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[] 
   
  }

  componentDidMount(){
    BooksAPI.getAll().then(books => {
      this.setState({books:books})
    })
  }

  updateBook = (attrs) =>{

    this.setState({
      books: this.state.books.map((book) => {
        if (book.id === attrs.id) {
          return Object.assign({}, book);
        } else {
          return book;
        }
      }),
    });
    
  }
  
  render() {
   
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            onUpdateBook={this.updateBook}
          />
        )}/>

        <Route path='/search' render={({ history }) => (
          <Search
            books={this.state.books}
            onUpdateBook={this.updateBook}
          />
        )}/>

      </div>  
     
    )
  }
}


export default BooksApp
