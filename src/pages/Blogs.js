import React, { useEffect } from "react";
import "../posts.js";
import { query } from "../posts.js";
import BlogCard from "../components/BlogCard.js";
import { useState } from "react";

class Blogs extends React.Component {
    state = {
        posts: [],
        loading: true
    };

    componentDidMount() {
        this.fetchBlogs();
    }

    fetchBlogs = async() => {
        const response = await fetch('https://api.hashnode.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query }),
        })
        const APiResponse = await response.json();
        console.log(APiResponse.data);
        this.setState({posts: APiResponse.data.user.publication.posts, loading: false});
    };
  
    render() {
        if (this.state.loading) return <div>nbsp;</div>;
        return (
         <section id="blogs">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 container mx-auto flex flex-col items-center">
              <h1 id="bloghead" className="title-font !bg-gradient-to-br !from-pink-300 !via-purple-300 !to-indigo-400 !text-4xl font-extrabold inline-block text-transparent bg-clip-text sm:text-5xl">
                Blogging
              </h1>
            </div>
            <br />
            <div className="mx-auto flex px-10 flex-wrap items-center">
            {this.state.posts.map((post, index) => (
                  <a key={index} href={`https://abelisaurus.hashnode.dev/${post.slug}`} >
                    <BlogCard post={post} />
                  </a>
            ))}                
            </div>
          </section>
  
        );
    }
    
}

export default Blogs;