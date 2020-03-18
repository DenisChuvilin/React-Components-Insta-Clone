//Complete the necessary code in this file
import React from 'react';
import Post from './Post';
import './Posts.css';

// pass the data from App.js down as props then map through the data
const PostsPage = ({ data }) => (
  <div className="posts-container-wrapper">
    {/* map through data here */}

    {data.map((post, index) => {
      return console.log(post), (<Post key={index} post={post} />);
    })}
  </div>
);

export default PostsPage;
