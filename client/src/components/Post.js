import React, {useEffect} from "react"
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom"

export default props => {
  const posts = useSelector(appState => appState.posts)
  const post = posts.find(post => post.id == props.match.params.id)

  const id = (post) ? post.id:null

  return (
    <div>
      <nav>
        <button><Link to={"/Post/" + (id-1)}>To previous post</Link></button>
        <button>Back to list</button>
        <button><Link to={"/Post/" + (id+1)}>To next post</Link></button>
      </nav>
      <main className="details">
        <h1>{(post) ? post.title:null}</h1>
        <p>{(post) ? post.description:null}</p>
      </main>
      <footer>
        <p>post id: {id}</p>
        <p>posted: {(post) ? post.date_created:null} </p>
      </footer>
    </div>
  )
}