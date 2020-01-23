/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from 'react';
import './App.css';
// import the PostsPage and SearchBar and add them to the App
import PostsPage from './components/PostsContainer/PostsPage.js';
import SearchBar from './components/SearchBar/SearchBarContainer.js';
// import dummydata
import './dummy-data.js';
import dummyData from './dummy-data.js';

const App = props => {
  // set up state for the dummy data and pass to your PostsPage
  const [data] = useState(dummyData);
  return (
    <div className="App">
      <SearchBar />
      <PostsPage postData={data} />
    </div>
  );
};

export default App;
