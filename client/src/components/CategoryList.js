import React from "react"
import { Link } from "react-router-dom"


export default props => {
  return (
    //className="categorybox" from /home
    <> 
      <div className="categboxheader">
        <Link to="/Category"><h1>name</h1></Link>
      </div>
      <div className="subcategory">
        <ul>
          <li>Subcategory</li>
          <li>Subcategory</li>
          <li>Subcategory</li>
          <li>Subcategory</li>
          <li>Subcategory</li>
          <li>Subcategory</li>
          <li>Subcategory</li>
          <li>Subcategory</li>
          <li>Subcategory</li>
        </ul>
      </div>
    </>
  )
}