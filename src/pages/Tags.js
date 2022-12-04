import Blog from "../data";
import { Link } from "react-router-dom";


Blog.tags.sort((a, b) => {
a = a.tag.toLowerCase();
b = b.tag.toLowerCase();
if (a < b) {
return -1;
}
if (a > b) {
return 1;
}
return 0;
});

function Tags() {
return (
<div>
<h1>Список тегов</h1>
    <ul>
{
  Blog.tags.map((tag) => (
      <li key={tag.id}>
<Link to={`/tags/${tag.id}`}>{tag.tag}</Link>
</li>
  )
)
}
</ul>
</div>
)
}

export default Tags;
