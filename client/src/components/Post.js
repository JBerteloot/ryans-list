import React from "react"



export default props => {
  return (
    <div>
      <nav>
        <button>To previous post</button>
        <button>Back to search</button>
        <button>To next post</button>
      </nav>
      <main className="details">
        <h1> Title</h1>
        <p>Description</p>
      </main>
      <footer>
        <p>post id: </p>
        <p>posted:  </p>
      </footer>
    </div>
  )
}