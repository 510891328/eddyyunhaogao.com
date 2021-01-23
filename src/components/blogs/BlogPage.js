import React, { useState, useEffect } from 'react';
import Blog from './Blog';

const renderBlog = (blog, i) => {
  return <Blog blog={blog} key={i}/>
}

function Blogs() {
  const [blogs, setBlogs] = useState([])

  useEffect( () => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@as510891328')
   .then((res) => res.json())
   .then(data => {
     setBlogs(data.items);
   })
 },[]);
 
  return (
      blogs.map( (blog, i)=> renderBlog(blog, i) )
  )
}

export default Blogs;
