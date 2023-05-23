// postList.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/actions";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    return posts.map((post) => {
      return <div key={post.id}>{post.title}</div>;
    });
  };

  return <div>{renderPosts()}</div>;
};

export default PostList;