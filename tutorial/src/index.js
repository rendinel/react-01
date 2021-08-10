import React from 'react';
import ReactDOM from 'react-dom';

const Booklist = () =>{
  return <Book/>
}

const Book = () => {
  return(
    <article>
      <Image/>
      <Author/>
      <Title/>
    </article>
  )
}

const Image = () => <img src="https://m.media-amazon.com/images/I/712a89VVDyL._AC_UL480_FMwebp_QL65_.jpg"/>
const Author = () => <h2>Stephen King</h2>
const Title = () =>  <h3>IT</h3>

ReactDOM.render(<Booklist/>, document.getElementById('root'))
 