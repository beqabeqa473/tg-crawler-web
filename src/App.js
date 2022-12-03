import logo from './logo.svg';
import './App.css';
import Post from "./components/Post";
import Posts from "./components/Posts";
import Blog from "./data.json"
import React from "react"

function App() {
  const [post, setPost] = React.useState(Blog.posts[0])

  const selectPost = (selected) => {
    setPost(selected)
  }

  return (
    <div className="App">
      <h1>My Blog</h1>
      <Posts posts={Blog.posts}select={selectPost}/>
      <Post post={post}/>
    </div>
  );
}

export default App;
