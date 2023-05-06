import React, { useEffect } from "react";
import "../posts.js";
import { query } from "../posts.js";
import BlogCard from "../components/BlogCard.js";
import { useState } from "react";

class Blogs extends React.Component {
    state = {
        posts: [],
        loading: true,
    };

    componentDidMount() {
        this.fetchBlogs();
    }

    fetchBlogs = async() => {
       let hasMorePosts = true;
       let page = 0;
       let allPosts = [];

       while(hasMorePosts) {
        const response = await fetch('https://api.hashnode.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query, variables: { page } }),
        })
        const APiResponse = await response.json();
        console.log(APiResponse.data);
        userPosts = APiResponse.data.user.publication.posts;

        if (userPosts.length === 0) {
          hasMorePosts = false;
          continue;
        }

        allPosts = allPosts.concat(userPosts);
        page++;
     }

       this.setState({posts: allPosts, loading: false});
    };
  
    render() {
        if (this.state.loading) return <div className="h-screen"><div className="items-center"><img src="./loader.svg" width="100" height="100" className="loaderpic" alt="Loader Pic" /></div></div>;
        return (
         <section id="blogs">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 container mx-auto flex flex-col items-center">
              <h1 id="bloghead" className="title-font !bg-gradient-to-br !from-pink-300 !via-purple-300 !to-indigo-400 !text-4xl font-extrabold inline-block text-transparent bg-clip-text sm:text-5xl">
                Blogging
              </h1>
            </div>
            <br />
            <div className="mx-auto flex px-10 flex-wrap items-center blogcard">
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
