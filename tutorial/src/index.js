import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const books = [
  {
    img: 'https://m.media-amazon.com/images/I/712a89VVDyL._AC_UL480_FMwebp_QL65_.jpg',
    title: 'IT',
    author: 'Stephen King',
  },
  {
    img: 'https://m.media-amazon.com/images/I/71nk6487CPL._AC_UL320_.jpg',
    title: 'LATER',
    author: 'Stephen King',
  },
  {
    img: 'https://m.media-amazon.com/images/I/7145TqjaA5L._AC_UL320_.jpg',
    title: 'CARRIE',
    author: 'Stephen King',
  },
]

const Booklist = () => {
  return (
    <main className='booklist'>
      {books.map((book) => {
        // const { img, title, author } = book
        return <Book book={book}></Book>
      })}
    </main>
  )
}

//03
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
//02
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

const Book = (props) => {
  //01 02 03
  // const { img, title, author } = props
  // 04 we are passing the deconstructured book from the map method so we need to access it from the props
  const { img, title, author } = props.book
  return (
    <article className='book'>
      <img alt='IT portrait' src={img} />
      <h2>{author}</h2>
      <h3>{title}</h3>
    </article>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))
