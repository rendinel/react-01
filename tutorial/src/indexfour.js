import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const firstBook = [
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
]

const Booklist = () => {
  return (
    <main className='booklist'>
      <Book
        img={firstBook[0].img}
        title={firstBook[0].title}
        author={firstBook[0].author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
          provident maiores repellendus ipsam quasi ipsa nisi officiis
          accusamus. Asperiores accusantium itaque nihil eius in recusandae
          dignissimos quis ipsa unde eligendi!
        </p>
      </Book>
      <Book
        img={firstBook[1].img}
        title={firstBook[1].title}
        author={firstBook[1].author}
      />
    </main>
  )
}

//02 we use props like the parameter of normal js and we can pass every value we want to our component
// const Book = (props) => {
//   console.log(props)
//   return (
//     <article className='book'>
//       <img alt='IT portrait' src={props.img} />
//       <h2>{props.author}</h2>
//       <h3>{props.title}</h3>
//     </article>
//   )
// }

//03we can also access the props while destructuring them
// const Book = (props) => {
//   const { img, title, author } = props
//   return (
//     <article className='book'>
//       <img alt='IT portrait' src={img} />
//       <h2>{author}</h2>
//       <h3>{title}</h3>
//     </article>
//   )
// }

// 03we can also destructure directly in the parameter section
// const Book = ({ img, title, author }) => {
//   return (
//     <article className='book'>
//       <img alt='IT portrait' src={img} />
//       <h2>{author}</h2>
//       <h3>{title}</h3>
//     </article>
//   )
// }

// 04children props,we destrcture children and then inside the component instead of the self closing verion we use the complete one
// <Book></Book> this one no <Book/> and inside the <Book><p>YOLO</p></Book> we write the children
const Book = ({ img, title, author, children }) => {
  return (
    <article className='book'>
      <img alt='IT portrait' src={img} />
      <h2>{author}</h2>
      <h3>{title}</h3>
      {children}
    </article>
  )
}

//01
// const Booklist = () => {
//   return (
//     <main className='booklist'>
//       <Book job='developer' />
//       <Book title='random title' number={22} />
//     </main>
//   )
// }

//01-props stand for properties and it's just a convention we can name it whetever we prefer,if we console log props we can see it's a object,it return one object for every component(in this case 2 book = 2object) we pass to our app,we can pass every value we want as a object and if it find a value to exist in one component but not in the other it will return nothing,this happen even if we don't call the value
// const Book = (props) => {
//   console.log(props)
//   return (
//     <article className='book'>
//       <img alt='IT portrait' src={img} />
//       <h2>{author.toLocaleUpperCase()}</h2>
//       <h3>{title}</h3>
//       <p>{props.job}</p>
//       <p>{props.title}</p>
//       <p>{props.number}</p>
//     </article>
//   )
// }

ReactDOM.render(<Booklist />, document.getElementById('root'))
