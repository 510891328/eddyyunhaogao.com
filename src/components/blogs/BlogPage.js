import React, { useState, useEffect } from 'react';

function Blog() {
  const [blogs, setBlogs] = useState([])
  useEffect( () => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@as510891328')
   .then((res) => res.json())
   .then(data => {
     setBlogs(data.items);
   })
 },[]);

 console.log(blogs)
  return (
    <div>
      This is blog Page!!!
    </div>
  )
}

export default Blog;
