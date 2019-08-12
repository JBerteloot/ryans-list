import store from '../store'
import axios from 'axios'


init()

function init() {
  axios.get("/api/posts").then(resp => {
    store.dispatch({
      type: 'GET_POSTS',
      payload: resp.data
    })
  })
  axios.get('/api/categories').then(resp => {
    store.dispatch({
      type: 'GET_CATEGORIES',
      payload: resp.data
    })
  })
}

export function getCategories() {
  axios.get('/api/categories').then(resp => {
    store.dispatch({
      type: 'GET_CATEGORIES',
      payload: resp.data
    })
  })
}

export function add(post) {
  axios.post('/api/posts', {post: post}).then(resp => {
    store.dispatch({
      type: 'ADD_POST',
      payload: post
    })
  })
}

export function getPosts() {
  axios.get('/api/categories:id/posts').then(resp => {
    store.dispatch({
      type: 'GET_POSTS',
      payload: resp.data
    })
  })
}

// export function selectCategory(id) {
//     store.dispatch({
//       type: 'SELECT_CATEG',
//       payload: id
//     })
// }



// export function getOnePost() {
//   axios.get('/api/categories:id/post_id').then(resp => {
//     store.dispatch({
//       type: 'GET_ONE_POST',
//       payload: resp.data
//     })
//   })
// }
