const renderBlogCategories = (categories) => {
    return categories.map( (category,i) => <span className="categories" key={i}>#<i>{category}</i></span>)
}

export default function Blog({blog}){
    return(
        <div>
            <div><a href={blog.link} rel="noreferrer" target='_blank'><img src={blog.thumbnail} alt={blog.title} width="400px"/></a></div>
            <h3><a href={blog.link} rel="noreferrer" target='_blank'>{blog.title}</a></h3>
            <div>{renderBlogCategories(blog.categories)}</div>
        </div>
    )
}