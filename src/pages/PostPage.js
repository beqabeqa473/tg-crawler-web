import { useLocation } from "react-router-dom"
import Post from "../components/Post";
import Posts from "../components/Posts";
import Blog from "../data.json"
import React from "react"

function PostPage() {
  const location = useLocation()
  const { post } = location.state

  return (
    <div className="SinglePost">
      <Post post={post} showLink={false}/>
    </div>
  );
}

export default PostPage;
