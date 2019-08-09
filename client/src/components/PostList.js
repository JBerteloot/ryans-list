import React from "react"

import LinkToPost from './LinkToPost'

export default props => {
  return (
    // div className="postlist" from /Category
    <>
      <span>
        <input type="textarea" placeholder="Search" /> 
      </span>
      <nav>
        <select>
          <option>list</option>
          <option>thumb</option>
          <option>galery</option>
          <option>map</option>
        </select>
        <div className="middle">
            <button>&#60; &#60;</button>
            <button className="prev">&#60; prev</button>
            <p># - # / ###</p>
            <button>next &#62;</button>
        </div>
        <button className="newest">newest</button>
      </nav>
      <main>
        <div className="linktopost">
          <LinkToPost />
        </div>
        <div className="linktopost">
          <LinkToPost />
        </div>
        <div className="linktopost">
          <LinkToPost />
        </div>
        <div className="linktopost">
          <LinkToPost />
        </div>
      </main>
    </>
  )
}