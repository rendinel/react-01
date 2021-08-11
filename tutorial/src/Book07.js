import React from 'react'

const Book07 = ({ img, title, author }) => {
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

export default Book07
