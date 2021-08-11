import React from 'react'
import ReactDOM from 'react-dom'
import { books } from './books07'
import { test } from './testing/testing'
import Book07 from './Book07'
import './index.css'

const Booklist = () => {
  console.log(test)
  return (
    <main className='booklist'>
      {books.map((book) => {
        return <Book07 key={book.id} {...book}></Book07>
      })}
    </main>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))
