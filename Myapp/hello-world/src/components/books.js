import React from "react";
import '../stylesheets/book.css';

 const Book = (props) => {
  return (
    <div className="Book">
    
      <h1>Books</h1>
      <h3>Book Name: {props.bookName}</h3>
      <h3>Author: {props.author}</h3>
      <input type="text" onChange={props.inputName} value={props.inputText}/>
    </div>
  );
}

export default Book;