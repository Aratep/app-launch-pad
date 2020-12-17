import axios from "axios";

const PostsApi = {
   getPosts() {
      return axios.get("https://jsonplaceholder.typicode.com/posts/");
   },
};

export default PostsApi;
