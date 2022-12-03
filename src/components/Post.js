import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <h3>{props.post.title}</h3>
      <h3>{new Intl.DateTimeFormat('ru-RU', {dateStyle: 'full', timeStyle: 'short'}).format(props.post.timestamp * 1000)}</h3>
      <p dangerouslySetInnerHTML={{__html: props.post.text}}/>
    </div>
  );
};

export default Post;