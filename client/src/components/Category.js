import React,  {useEffect} from "react"
import { Link } from "react-router-dom"
import {useSelector} from 'react-redux'

import PostList from './PostList'


export default props => {
  const posts = useSelector(appState => appState.posts)
  var filteredposts = posts.filter(post => post.category_id == props.match.params.id)

  return (
    <div className="categorypage">
      <div className="categorypageheader">
        <Link to="/">Back Home</Link>
        <Link to="/CreatePost">Create Post </Link>
      </div>
      <main>
        <aside id="filteraside">Filters</aside>
        <div className="postlist">
          <PostList posts={filteredposts}/>
        </div>
        <aside className="rightasidecat">

        </aside>
      </main>
    </div>
  )
}