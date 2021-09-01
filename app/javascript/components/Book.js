import React from "react"

const Book = ({title,author}) => {
  return(
    <div style={{margin:"10px", border:"4px solid blue"}}>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  )
}

export default Book