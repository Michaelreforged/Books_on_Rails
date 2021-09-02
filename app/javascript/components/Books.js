import React from "react"
import Book from "./Book"

const Books = ({books, getBooks, updateBook}) => {
  return(
    
    <div style={{margin:"10px", border:"5px solid green"}}>
      <h1>Books</h1>
      <button onClick={getBooks}>Get Books</button>
      {books.map((book) => (
        <Book updateBook={updateBook} key={book.id} {...book}/>
      ))}
    </div>
  )
}

export default Books