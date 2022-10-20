import React from 'react';
import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Feed from './component/Feed.jsx';


function App() {
  return (
    <div className="app">
      <Header/>
      {/* App body */}
      <div className="app__body">
        <Sidebar/>
        <Feed/>
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
