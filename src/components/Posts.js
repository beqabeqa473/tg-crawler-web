import React, { useState, useMemo } from 'react';
import Pagination from './Pagination';
import Post from './Post';

let PageSize = 10;
const Posts = (props) => {

  const [currentPage, setCurrentPage] = useState(1);
  const currentPosts = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return props.posts.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const postsJSX = currentPosts.map((post, index) => (
    <div className="summary">
      <h2>{post.title}</h2>
      <p>{new Intl.DateTimeFormat('ru-RU', {dateStyle: 'full', timeStyle: 'short'}).format(post.timestamp * 1000)}</p>
      <Post post={post}/>
    </div>
  ));


  return (
<div>
<p>Страница {currentPage} из {Math.ceil(props.posts.length / PageSize)}</p>
<div className="posts">{postsJSX}</div>
      <Pagination currentPage={currentPage} totalCount={props.posts.length} pageSize={PageSize} onPageChange={page => setCurrentPage(page)} />
</div>
)
};

export default Posts;