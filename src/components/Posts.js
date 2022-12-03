import React from "react";

const Posts = (props) => {
  const postsJSX = props.posts.map((post, index) => (
    <div className="summary" onClick={() => props.select(post)}>
      <h1>{post.title}</h1>
      <p>{new Intl.DateTimeFormat('ru-RU', {dateStyle: 'full', timeStyle: 'short'}).format(post.timestamp * 1000)}</p>
    </div>
  ));

  return <div className="posts">{postsJSX}</div>;
};

export default Posts;