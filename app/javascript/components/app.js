import React, { useState } from "react"
import axios from "axios"
import Books from "./Books"
import BookForm from "./BookForm"

const app = () => {
  const [books,setBooks] = useState([]);

  const getBooks = async () => {
    try{
      let res = await axios.get("/books")
      console.log(res.data)
      setBooks(res.data)
    }catch(err){
      console.log(err)
    }
  }

  const addBook = async (book) => {
    try{
      let res = await axios.post("/books", book)
      setBooks= ([res.data, ...books])
    } catch(err) {
      console.log(err)
    }
  }
  const updateBook = async (book) => {
    try{
      let res = await axios.put(`/books/${book.id}`, book)
      let newBooks = books.map((b) => (b.id === book.id ? book : b))
      setBooks(newBooks)
    } catch{
      alert("Failed to Update Book")
      console.log(err)
    }
  }


  return(
    <div>
      <h1>Book App</h1>
      <BookForm addBookProps={addBook} />
      <Books books = {books} getBooks={getBooks} updateBook={updateBook}/>

    </div>
  )
}

export default app