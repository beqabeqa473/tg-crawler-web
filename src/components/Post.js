import React from "react";
import Blog from "../data.json"

const Post = (props) => {
  return (
    <div className="post">
      <p dangerouslySetInnerHTML={{__html: props.post.text}}/>
{
Blog.channel_username &&
<a href={`https://t.me/${Blog.channel_username}/${props.post.id}`} target="blank">Читайте в Telegram</a>
}
    </div>
  );
};

export default Post;