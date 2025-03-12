
import React,{Component} from 'react';
// function  Person(props){
//   console.log(props);
//     return (
//       <div>
//         <h1>Number : {Math.random()}</h1>
//         <h3>Name : {props.name} and Age: {props.age}</h3>
//         <h4>Extra Info: {props.children}</h4>
//       </div>
//     );
//   }
/// if we want to pass props to class component then we have to use this.props and we have to use constructor to pass the attributes
class Person extends Component{
     constructor(props){
       super(props);
       
     }
     render(){
          console.log(this.props);
        return ( 
          <div><h1></h1>
                  <h1>Number : {Math.random()}</h1>
                  <h3>Name : {this.props.name} and Age: {this.props.age}</h3>
                 <h4>Extra Info: {this.props.children}</h4>
                </div>
        )
     }


}

  export default Person;