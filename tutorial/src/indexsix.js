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

const Booklist = () => {
  return (
    <main className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </main>
  )
}

const Book = ({ img, title, author }) => {
  //we need to add attribute and eventhandler
  const clickHandler = (e) => {
    console.log(e)
    console.log(e.target)
    console.log('ola')
  }

  //on more complex example where we need to pass a paramether we need to call the function like an arrow function
  const complexExample = (author) => {
    console.log(author)
  }

  return (
    <article className='book'>
      <img
        alt='IT portrait'
        src={img}
        onMouseOver={() => {
          console.log(title)
        }}
      />
      <h2 onClick={() => console.log(title)}>{author}</h2>
      <h3>{title}</h3>
      <button type='button' onClick={clickHandler}>
        click
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))
