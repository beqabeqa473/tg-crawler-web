import { Link } from "react-router-dom";
import React from "react";
import Blog from "../data.json"

const Post = (props) => {
  return (
    <div className="post">
{
props.showLink &&
      <h2><Link to={`/post/${props.post.id}`} state={{post: props.post}}>{props.post.title}</Link></h2> || 
      <h2>{props.post.title}</h2>
}
      <p>{new Intl.DateTimeFormat('ru-RU', {dateStyle: 'full', timeStyle: 'short'}).format(props.post.timestamp * 1000)}</p>
      <p dangerouslySetInnerHTML={{__html: props.post.text}}/>
{
Blog.channel_username &&
<a href={`https://t.me/${Blog.channel_username}/${props.post.id}`} target="blank">Читайте в Telegram</a>
}
    </div>
  );
};

export default Post;