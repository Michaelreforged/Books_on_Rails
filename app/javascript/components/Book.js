import React, {useState} from "react"
import BookForm from "./BookForm"

const Book = ({id,title,author,updateBook}) => {
  const [showForm, setShowForm] = useState(false)
  return(
    <div style={{margin:"10px", border:"4px solid blue"}}>
      <h3>{title}</h3>
      <p>{author}</p>
      <button onClick={() => setShowForm(!showForm)}>{showForm ? "Cancel Update" : "Update" }</button>
      {showForm && (<BookForm 
      updateBook={updateBook} 
      id={id}
      title={title}
      author={author}
      />)}      
    </div>
  )
}

export default Book