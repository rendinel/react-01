import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/712a89VVDyL._AC_UL480_FMwebp_QL65_.jpg',
    title: 'IT',
    author: 'Stephen King',
  },
  {
    id: 2,
    img: 'https://m.media-amazon.com/images/I/71nk6487CPL._AC_UL320_.jpg',
    title: 'LATER',
    author: 'Stephen King',
  },
  {
    id: 3,
    img: 'https://m.media-amazon.com/images/I/7145TqjaA5L._AC_UL320_.jpg',
    title: 'CARRIE',
    author: 'Stephen King',
  },
]
//04 we pass the component from the book component we can pass all the data together becauyse we deconstructed book inside book component
//const { img, title, author } = props.book
const Booklist = () => {
  return (
    <main className='booklist'>
      {books.map((book) => {
        //we can eliminate this line because we are deconstructing when we create the component Book
        // const { img, title, author } = book
        // 05 we need to pass something unique to react key={book.id} because it's always in loop
        // return <Book key={book.id} book={book}></Book>
        //06 we can use the spread operator and spread all the properties coming from the object book
        return <Book key={book.id} {...book}></Book>
      })}
    </main>
  )
}

//03 we pass the element from a component one by one
// const Booklist = () => {
//   return (
//     <main className='booklist'>
//       {books.map((book) => {
//         const { img, title, author } = book
//         return <Book img={img} title={author} author={author}></Book>
//       })}
//     </main>
//   )
// }
//02we print the object passing one by one the element inside a div
// const Booklist = () => {
//   return (
//     <main className='booklist'>
//       {books.map((book) => {
//         const { img, title, author } = book
//         return (
//           <div>
//             <img src={img} alt='' />
//             <h3>{title}</h3>
//             <h6>{author}</h6>
//           </div>
//         )
//       })}
//     </main>
//   )
// }

//01 how to print array in react this don't work with object
// const names = ['john', 'peter', 'susan']
// const newName = names.map((name) => {
//   return <h1>{name}</h1>
// })
// const Booklist = () => {
//   return <main className='booklist'>{newName}</main>
// }

// const Book = (props) => {
// 05 we can also define and asign the props to this value in the parenthesis
const Book = ({ img, title, author }) => {
  //01 02 03
  // const { img, title, author } = props
  // 04 we are passing the deconstructured book from the map method so we need to access it from the props
  // const { img, title, author } = props.book
  // 05 since we are using the spread operathor we don't need to access the object props.books
  // const { img, title, author } = props
  return (
    <article className='book'>
      <img alt='IT portrait' src={img} />
      <h2>{author}</h2>
      <h3>{title}</h3>
    </article>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))
