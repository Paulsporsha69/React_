import React , { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './components/person';

import Book from './components/books';
//jsx
// //functional component
// // function App() {
// //   return (
// //     <div className="App">
    
// //       <h1>Hello world</h1>
// //       <Person></Person>
// //     </div>
// //   );
//   // return React.createElement(
//   //   'div',
//   //   {},React.createElement(
//   //     'h1',
//   //     null,
//   //     'Hello world'
//   //   ),<Person/>
//   // );
// // }

// // function  Person(){
// //   return (
// //     <div>
// //       <h1>Person</h1>
// //     </div>
// //   );
// // }


// //class component for person component

// // class App extends Component{
// //   render(){
// //     return (
// //       <div className="App">
      
// //         <h1>Hello world</h1>
// //         <Person name="Paul" age ="24"/>
// //         <Person name="Paul"  age ="24" />
// //         <Person name="Paul"  age ="24"/>
       
      

// //       </div>
// //     );
// //   }
// // }


// //class component for books component

// class App extends Component{

//   state = {
//     books:[
//       {bookName:"Java",author:"James Gosling"},
//       {bookName:"Python",author:"Guido van Rossum"},
//       {bookName:"JavaScript",author:"Brendan Eich"}
//     ],
//     inputText: ''
//   }
//   changeBookState = () => {
//     this.setState({
//       books:[ 
//         {bookName:"Python",author:"Guido vanRossum"},
//         {bookName:"Java",author:"James Gosling"},
//          {bookName:"JavaScript",author:"Brendan Eich"} ]
//   });}

//   changeWithInputstate = (event) => {
//     this.setState({
// inputText: event.target.value
//   });
//   }
//   render() {
//     return(
         
//       <div className="App">
//         <h1>Book List</h1>
//         <button onClick={this.changeBookState}>Change Book</button>
//         <input type="text" onChange={this.changeWithInputstate} value={this.state.inputText} />
//         <Book bookName={this.state.books[0].bookName} author={this.state.books[0].author}/> 
//         <Book bookName={this.state.books[1].bookName} author={this.state.books[1].author}/>
//         <Book bookName={this.state.books[2].bookName} author={this.state.books[2].author}/>
//       </div>
//     )
//   }
// }

// export default App;
class App extends Component {

  state = {
    books:[
      {id:1,bookName:"Java",author:"James Gosling"},
      {id:2,bookName:"Python",author:"Guido van Rossum"},
      {id:3,bookName:"JavaScript",author:"Brendan Eich"}
    ],
    inputText: '',
    showBooks: true
  }

  changeBookState = () => {
    this.setState({
      books:[ 
        {bookName:"Python",author:"Guido van Rossum"},
        {bookName:"Java",author:"James Gosling"},
        {bookName:"JavaScript",author:"Brendan Eich"} ]
    });
  }

  changeWithInputstate = (event) => {
    this.setState({ inputText: event.target.value });
  }
  toggleBooks = () => {
    this.setState ({showBooks: !this.state.showBooks});
  }

  render() {

    //books list
    let books = null;
    if(this.state.showBooks){
      books = (
        <div>
          {this.state.books.map((book,index) => {
            return <Book 
              bookName={book.bookName}
              author={book.author}
              key={book.id}
              inputName={this.changeWithInputstate} // Pass the function as a prop
              inputText={this.state.inputText} // Pass the state as a prop
            />
          })}
        </div>
      );
    }
  
    return(
      <div ooooclassName="App">
        <h1>Book List</h1>
        <button onClick={this.toggleBooks}>Toggle Books</button>
        { this.state.showBooks ? books : null }
        {/* <button onClick={this.changeBookState}>Change Book</button>
        <input 
          type="text" 
          onChange={this.changeWithInputstate} 
          value={this.state.inputText} // Bind the input value to the state */}
        {/* /> */}
        {/* <Book 
          bookName={this.state.books[0].bookName} 
          author={this.state.books[0].author}
          inputName={this.changeWithInputstate} // Pass the function as a prop
          inputText={this.state.inputText} // Pass the state as a prop
        /> 
        <Book 
          bookName={this.state.books[1].bookName} 
          author={this.state.books[1].author}
          inputName={this.changeWithInputstate} // Pass the function as a prop
          inputText={this.state.inputText} // Pass the state as a prop
        />
        <Book 
          bookName={this.state.books[2].bookName} 
          author={this.state.books[2].author}
          inputName={this.changeWithInputstate} // Pass the function as a prop
          inputText={this.state.inputText} // Pass the state as a prop
        /> */}
      </div>
    )
  }
}

export default App;