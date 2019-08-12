const initialState = {
  categories: [],
  posts: [],
  newPost: {},
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return {...state, categories: action.payload}

  case 'ADD_POST':
    return {...state, posts:[action.payload, ...state.posts]}

    case 'GET_POSTS':
      return {...state, posts: action.payload}

    // case 'SELECT_CATEG':
    // return {...state, newPost: {category_id: action.payload, ...newPost}}

    // case 'ADD_ONE_POST':
    //   return {...state, post: action.payload}

    default:
      return state
  }
}