// In order to create our component we need to import the reactdom, then we are going to create a function starting with a capital letter that will be our component
// we need the capital letter to let react know this is a component and the we use the render method on ractdom passing the component and where we want to render the component
// import React from 'react'
// import ReactDom from 'react-dom'

// function Greeting(){
//   return <h4> this is me </h4>
// }

// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world')
// }

// function Greeting() {
//   return (
//     <div>
//       <h1>hello world dos</h1>
//     </div>
//   )
// }

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world three')
//   )
// }

import React from 'react'
import ReactDOM from 'react-dom'
//RETURN SINGLE ELEMENT
//we can put only one container and inside tis container we can put even a whole website, but if we try to put 2 container we will run into an error
//if we have multiple div we can also wrap everything inside a reacr fragment
//if we add class or inlineeventlistener we must use camelcase or it won't work es. not class but className
//it's important to close every element otherwise we will run into error even selfclosing tag like img always add the / for closing
// if we write on multiple line it's better to add () otherwise we can run into error if our opening and closing aren't on the same line
// <div></div> it works fine
// <div>
//</div> will run into error

//function Greeting(){
//return (
//    <React.Fragment>
//    <div className='container'>
//        <h1>Hello world</h1>
//        <ul>
//          <li><a href='#'>Hello world two</a></li>
//        </ul>
//        <img/>
//    </div>
//  </React.Fragment>
//  )
//}

//NESTED COMPONENT REACT TOOLS
// we can create and call as many component as we want to create our apps
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => <h2>john cena</h2>
const Message = () => {
  return <p>ef-5</p>
}

ReactDOM.render(<Greeting />, document.getElementById('root'))
