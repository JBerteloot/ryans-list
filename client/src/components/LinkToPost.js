import React from "react"
import {Link} from "react-router-dom"
import MaterialIcons from 'material-icons-react'
import {useSelector} from 'react-redux'

export default props => {
  const post = props.post

  return (
    //div className="linktopost" from /PostList
    <>
      <p><MaterialIcons icon="star_border"/></p>
      <img src="" alt="post_title" />
      <p>Date</p>
      <Link to={"/Post/" + post.id} ><p>{post.title}</p></Link>
      <p>Price</p>
      <p>(location -if applicable)</p>
      <button><MaterialIcons icon="delete_forever" /></button>
    </>
  )
}