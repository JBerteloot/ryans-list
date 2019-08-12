import React, {useEffect} from "react"
import { Link } from "react-router-dom"
import {useSelector} from 'react-redux'

export default props => {
  const category = props.category

  return (
    //className="categorybox" from /home
    <> 
      <div className="categboxheader">
        <Link to="/Category/1"><h1>{props.name}</h1></Link>
      </div>
      <div className="subcategory"> 
        <ul>
          {props.sub.map((categ, i) => (
            // <Link to={"/Category/" + (category.id)}><li key={'subcat' + i}>{categ.name}</li></Link>
            <li key={'subcat' + i}>{categ.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}