import React from "react"
import {Link} from "react-router-dom"
import MaterialIcons from 'material-icons-react'


export default props => {
  return (
    //div className="linktopost" from /PostList
    <>
      <p><MaterialIcons icon="star_border"/></p>
      <img src="" />
      <p>Date</p>
      <Link to="/Posts"><p>Post Title</p></Link>
      <p>Price</p>
      <p>(location -if applicable)</p>
      <button><MaterialIcons icon="delete_forever" /></button>
    </>
  )
}