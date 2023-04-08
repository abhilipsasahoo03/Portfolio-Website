import React from "react";
import '../App.css';

const BlogCard = ({ post }) => {
    return (
        <div className="card">
            <img src={post.coverImage} alt={post.title} />
            <h2 className="font-extrabold" >{post.title}</h2>
            <p>{post.brief}</p>
        </div>
    )
}

export default BlogCard