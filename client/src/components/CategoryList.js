import React, {useEffect} from "react"
import { Link } from "react-router-dom"
import {useSelector} from 'react-redux'
import {getCategory} from '../actions/actions'


export default props => {
  return (
    //className="categorybox" from /home
    <> 
      <div className="categboxheader">
        <Link to="/Category"><h1>{props.name}</h1></Link>
      </div>
      <div className="subcategory"> 
        <ul>
          {props.sub.map((categ, i) => (
            <li key={'subcat' + i}>{categ.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}