import React, {useState} from "react";

const BookForm = (props) =>{
  const [title, setTitle] = useState(props.title ? props.title : "");
  const [author, setAuthor] = useState(props.author ? props.author : "");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.id) {
      props.updateBook({id: props.id, title, author});
    } else {
      props.addBookProps({title, author});
    };
    if (!props.error) {
      setTitle("");
      setAuthor("");
    };
  };

  return(
    <div>
      <h1>Books Form</h1>
      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input 
        value = {title}
        onChange ={(e) => {
          setTitle(e.target.value)
        }}
        />
        <p>Author</p>
        <input 
        value ={author}
        onChange={(e) => {
          setAuthor(e.target.value)
        }}
        />
        <button >{props.id ? "update" : "add"}</button>
      </form>
    </div>
  );
};

export default BookForm