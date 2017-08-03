import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import escapeRegExp from 'escape-string-regexp'


class ListBooks extends React.Component {
  
  handleUpdateBook = (value,book) => {
    book.shelf=value
    this.props.onUpdateBook(book)
  }  


  render() {
    
    let currentlyReading
    let wantToRead
    let read
   
    const filterCReading= new RegExp(escapeRegExp('currentlyReading'))
    currentlyReading=this.props.books.filter(book => filterCReading.test(book.shelf))

    const filterWReading= new RegExp(escapeRegExp('wantToRead'))
    wantToRead=this.props.books.filter(book => filterWReading.test(book.shelf))

    const filterRReading= new RegExp(escapeRegExp('read'))
    read=this.props.books.filter(book => filterRReading.test(book.shelf))
    return (
      <div className="app">
       
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     {currentlyReading.map(book =>(
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
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {wantToRead.map(book =>(
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
                              <select onChange={(event) => this.handleUpdateBook(event.target.value,book)}>
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
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {read.map(book =>(
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
                              <select onChange={(event) => this.handleUpdateBook(event.target.value,book)}>
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
              </div>
            </div>
            
            <div className="open-search">  
              <Link
                to='/search'
              >Add a Book</Link> 
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default ListBooks

