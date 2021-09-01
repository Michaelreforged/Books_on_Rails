import React, { useState } from "react"
import axios from "axios"
import Books from "./Books"

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
  

  return(
    <div>
      <h1>Book App</h1>
      <Books books = {books} getBooks={getBooks}/>

    </div>
  )
}

export default app