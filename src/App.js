import './App.css';
import React from 'react';
import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';
import ProfileComponent from './components/ProfileComponents/ProfileComponent.js';

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
