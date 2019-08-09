import React from 'react'
import { BrowserRouter as Router, Route, Link} from "react-router-dom"
import 'normalize.css/normalize.css'
import '../styles/App.css'
import '../styles/Categories.css'
import '../styles/Posts.css'
import { Provider } from 'react-redux'
import store from '../store'

import Home from './Home'
import CategoryList from './CategoryList'
import Category from './Category'
import PostList from './PostList'
import Post from './Post'
import CreatePost from './CreatePost'


export default props => {
  return (
    <Provider store={store}>
      <Router>
        <div id="container">
          {/* {Home} */}
        </div>
        <Route exact path ="/" component={Home} />
        <Route exact path ="/CategoryList" component={CategoryList} />
        <Route exact path ="/Category" component={Category} />
        <Route exact path ="/PostList" component={PostList} />
        <Route exact path ="/Post" component={Post} />
        <Route exact path ="/CreatePost" component={CreatePost} />
      </Router>
    </Provider>
  )
}