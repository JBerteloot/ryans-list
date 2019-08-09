import React from "react"
import { Link } from "react-router-dom"

import PostList from './PostList'


export default props => {
  return (
    <div className="categorypage">
      <div className="categorypageheader">
        <Link to="/">Back Home</Link>
        <Link to="/CreatePost">Create Post </Link>
      </div>
      <main>
        <aside id="filteraside">Filters</aside>
        <div className="postlist">
          <PostList />
        </div>
        <aside className="rightasidecat">

        </aside>
      </main>
    </div>
  )
}