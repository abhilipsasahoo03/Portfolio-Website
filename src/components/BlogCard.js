import React from "react";
import '../App.css';

const BlogCard = ({ post }) => {
    return (
        <div className="card">
          <br />
          <hr className="line"/>
          <br />
          <div className="cardcontent">
            <img src={post.coverImage} alt={post.title} />
            <br />
            <h2 className="font-extrabold">{post.title}</h2>
            <br />
            <p>{post.brief}</p>
            <br />
            <br />
            <center><p className="font-extrabold">&#9829; {post.totalReactions} | &#128172; {post.responseCount}</p></center>
         </div>
        </div>
    );
}

export default BlogCard