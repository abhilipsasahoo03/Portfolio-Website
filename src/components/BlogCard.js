import React from "react";
import '../App.css';

const BlogCard = ({ post }) => {
    return (
        <div className="card">
            <img src={post.coverImage} alt={post.title} />
            <h2 className="font-extrabold">{post.title}</h2>
            <p>{post.brief}</p>
            <br>
            <br>
            <p className="font-extrabold">&#9829; {post.totalReactions} | &#128172; {post.responseCount}</p>
        </div>
    );
}

export default BlogCard