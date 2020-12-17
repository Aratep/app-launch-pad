import { takeLatest, call, put } from "redux-saga/effects";
import { PostsTypes } from "./test.action-types";
import { setPosts } from "./test.actions";
import PostsApi from "./test.api";

export function* loadPostsWatcher() {
   yield takeLatest(PostsTypes.LOAD_POSTS, loadPosts);
}

function* loadPosts() {
   console.log("++++");
   const posts = yield call(PostsApi.getPosts);
   console.log(" ----", posts);
   yield put(setPosts(posts));
}
