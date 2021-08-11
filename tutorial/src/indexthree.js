import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Booklist = () => {
  return (
    <main className='booklist'>
      <Book />
    </main>
  )
}

//we can pass value in a dinamic way instead of hardcoding them but we need to pass a value in the const or we are going to throw an error
const author = 'Stephen King'
const Book = () => {
  const title = 'IT'
  return (
    <article className='book'>
      <img
        alt='IT portrait'
        src='https://m.media-amazon.com/images/I/712a89VVDyL._AC_UL480_FMwebp_QL65_.jpg'
      />
      <h2>{author.toLocaleUpperCase()}</h2>
      <h3>{title}</h3>
      {/* <p>{let x = 6}</p>  throw error*/}
      <p>{6 + 6}</p>
      {/* work with a function because return a value */}
    </article>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))
