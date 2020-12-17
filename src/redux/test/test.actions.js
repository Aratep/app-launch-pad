import { PostsTypes } from "./test.action-types";

export const loadPostsStart = () => ({
   type: PostsTypes.LOAD_POSTS_START,
});
export const loadPostsSuccess = (data) => ({
   type: PostsTypes.LOAD_POSTS_START,
   payload: data,
});
export const loadPostsFailure = (error) => ({
   type: PostsTypes.LOAD_POSTS_START,
   payload: error,
});

export const setPosts = (posts) => ({
   type: PostsTypes.SET_POSTS,
   payload: posts,
});

export const loadPosts = () => ({
   type: PostsTypes.LOAD_POSTS,
});
