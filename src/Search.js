import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import { Link } from 'react-router-dom'
class Search extends Component {
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  handleUpdateBook = (value,book) => {
    if (this.state.query != value) {
      book.shelf=value
      this.props.onUpdateBook(book)
    } 
    
  }  

  /*
   if (this.state.results != results) {
    this.setState({
        results
    })
}
  */

  render(){
    let showingBooks
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingBooks = this.props.books.filter((book) => match.test(book.title))
    } else {
      showingBooks = this.props.books
    }

    showingBooks.sort(sortBy('title'))
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'className="close-search" >Add a Book</Link>
             
            <div className="search-books-input-wrapper">
              <input 
                  type="text"
                  value={this.state.query} 
                  placeholder="Search by title or author"
                  onChange={(event) => this.updateQuery(event.target.value)} />
            </div>
        </div>
 
        <div className="search-books-results">
           <ol className="books-grid">
                {showingBooks.map(book =>(
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" 
                          style={{ width: 128, 
                                              height: 193, 
                                              backgroundImage: 'url(http://books.google.com/books/content?id='+book.id+'&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api)' 
                          }}>
                        </div>
                        <div className="book-shelf-changer">
                          <select id='cReading' onChange={(event) => this.handleUpdateBook(event.target.value,book)}>
                            <option value="none">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.authors}</div>
                    </div>
                  </li>
                       
                ))}                      
              </ol>
        </div>

    </div>
     
    )
  }
}

export default Search
