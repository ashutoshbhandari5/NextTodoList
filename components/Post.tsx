import React from "react";
import { useDispatch } from "react-redux";
import { deletePost, editPost } from "../actions/PostAction";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <div key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.message}</p>
      <button onClick={() => dispatch(editPost(post.id))}>Edit</button>
      <button onClick={() => dispatch(deletePost(post.id))}>Delete</button>
    </div>
  );
};
export default Post;
