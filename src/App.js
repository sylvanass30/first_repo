import './App.css';
import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import ProfileComponent from './components/ProfileComponent';

const App =()=> {
  return (
    <div className="app-wrapper">
        <Header/>
      <Nav/>
        <ProfileComponent/>
      
    </div>
  );
}



export default App;
