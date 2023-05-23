import {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '../store/actions'

const initialState = {
  laoding: false,
  posts: [],
  error: null,
}

const postsReducer = (state = initialState, action) => {
  switch (action.type){
    case FETCH_POSTS:
    return{
      ...state,
      laoding: true
    }

    case FETCH_POSTS_SUCCESS:
      return{
        ...state,
        laoding: false,
        posts: action.payload,
        error: null,
      }

    case FETCH_POSTS_FAILURE:
      return{
        ...state,
        laoding:false,
        posts: [],
        error: action.payload,
    }  
    default:
      return state
  }
}

export default postsReducer