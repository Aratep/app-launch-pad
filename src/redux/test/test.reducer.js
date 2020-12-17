import { PostsTypes } from "./test.action-types";

const initialState = {
   posts: [],
   loading: false,
   errorMessage: "",
};

export const postsReducer = (state = initialState, action) => {
   switch (action.type) {
      case PostsTypes.LOAD_POSTS_START: {
         return { ...state, loading: true };
      }
      case PostsTypes.LOAD_POSTS_SUCCESS: {
         return { ...state, posts: action.payload, loading: false };
      }
      case PostsTypes.LOAD_POSTS_FAILURE: {
         return { ...state, errorMessage: action.payload, loading: false };
      }

      case PostsTypes.SET_POSTS: {
         return { ...state, posts: action.payload };
      }
      default:
         return state;
   }
};
