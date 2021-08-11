import React from 'react'
import ReactDOM from 'react-dom'
//there are 2 way to import the first one is from an exeternal file, the second one is inline we need to use {{}}
// because we are passing a js object so the property name will be camelcase and the css value inside "",if we add property on the same element from both exeternal and inline the one inline will override the external one because it have more specificity, keep in mind because some libraries add inlinestyle and we can't override from the external css sheeet
import './index.css'

const Booklist = () => {
  return (
    <main className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </main>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Author />
      <Title />
    </article>
  )
}

const Image = () => (
  <img
    alt='IT portrait'
    src='https://m.media-amazon.com/images/I/712a89VVDyL._AC_UL480_FMwebp_QL65_.jpg'
  />
)
const Author = () => (
  <h2 style={{ color: '#617d98', fontSize: '0.75rem' }}>Stephen King</h2>
)
const Title = () => <h3>IT</h3>

ReactDOM.render(<Booklist />, document.getElementById('root'))
