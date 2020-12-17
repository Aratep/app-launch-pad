import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//ACTIONS
import { loadPosts } from "redux/test/test.actions";

const PostsComponent = (props) => {
   const { loadPosts, posts } = props;

   const onClick = () => {
      console.log("onclick");
      loadPosts();
   };

   console.log(posts);

   return (
      <div className="app-container">
         <div className="posts-container"></div>
         <div className="posts-button-container">
            <div className="button_cont" align="center">
               <button className="example_a" onClick={onClick}>
                  Fetch Posts
               </button>
            </div>
         </div>
      </div>
   );
};

const structuredSelector = createStructuredSelector({
   posts: (state) => state.posts,
});

const mapDispatchToProps = (dispatch) => ({
   loadPosts: () => dispatch(loadPosts()),
});

export default connect(structuredSelector, mapDispatchToProps)(PostsComponent);
