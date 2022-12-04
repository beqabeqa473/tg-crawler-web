import Blog from "../data";
import { Link } from "react-router-dom";


function Tags() {
return (
<div>
<h1>Список тегов</h1>
    <ul>
{
  Blog.tags.sort().map((tagName, tagID) => (
      <li key={tagID}>
<Link to={`/tags/${tagID}`}>{tagName}</Link>
</li>
  )
)
}
</ul>
</div>
)
}

export default Tags;
