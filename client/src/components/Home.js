import React, {useEffect} from "react"
import {useSelector} from 'react-redux'
import {getCategories} from '../actions/actions'

import CategoryList from "./CategoryList"

export default props => {
  const categories = useSelector(appState => appState.categories)

  useEffect (() => {
    getCategories()
  }, [])

  return (
    <div id="home">
      <aside id="left">
        <h1>Ryan's List</h1>
        <p>create account</p>
        <p>my account</p>
        <input type="text" placeholder="search"/>
        <div>Calendar</div>
        <p>help, faq, abuse, legal</p>
        <p>avoid scams + fraud</p>
        <p>personal safety tips</p>
        <p>about craigslist</p>
      </aside>
      <main>
        <header>
          <p>las vegas</p>
        </header>
        <div className="categories">
          {categories.map((categ, i) => (
          <div key={'maincat' + i} className="categorybox">
            <CategoryList {...categ} /> 
          </div>
          ) )}
        </div>
      </main>
      
      <aside id="right">
      <select>
        <option>english</option>
      </select>
      <nav>
        <div className="slidingdown">
          <b>nearby cl</b>
          <ul>
            <li>city 1</li>
            <li>city 2</li>
            <li>city 3</li>
            <li>city 4</li>
            <li>city 5</li>
            <li>city 6</li>
          </ul>
        </div>
        <div className="slidingdown">
          <b>us cities</b>
          <ul>
            <li>city 1</li>
            <li>city 2</li>
            <li>city 3</li>
            <li>city 4</li>
            <li>city 5</li>
            <li>city 6</li>
          </ul>
        </div>
        <div className="slidingdown">
          <b>us states</b>
          <ul>
            <li>city 1</li>
            <li>city 2</li>
            <li>city 3</li>
            <li>city 4</li>
            <li>city 5</li>
            <li>city 6</li>
          </ul>
        </div>
      </nav>
      </aside>
    </div>
  )
}