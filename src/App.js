import './App.css';
import React from 'react';
import Header from './components/Header/Header.js';
import Nav from './components/Nav/Nav.js';
import Profile from './components/ProfileComponents/Profile.js';
import Dialogs from './components/Dialogs/Dialogs.js';
import News from './components/News/News.js';
import Music from './components/Music/Music.js';
import Settings from './components/Settings/Settings.js';
import Sidebar from './components/Sidebar/Sidebar.js'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';




const App =(props)=> {


  return (
    
    <BrowserRouter>
    <div className="app-wrapper">
        <Header/>
        <Nav/>      
      
        <Sidebar state={props.state.sidebar}/>  
        <div className="app-wrapper-content">
        <Routes>
          <Route exact path='/Dialogs/*' element={
            <Dialogs 
          store={props.store}/>}/> 
          

          <Route path="/Profile" element={
          <Profile 
          profilePage={props.state.profilePage} 
          dispatch={props.dispatch}
           />}/>



          <Route path="/News" element={<News/>}/>
          <Route path="/Music" element={<Music/>}/>
          <Route path="/Settings" element={<Settings/>}/>
          </Routes>
        </div>
        
    </div>
    </BrowserRouter>
  );
}

{/* exact не обязателен, этмоскрипт 6 путь теперь всегда по умолчанию экзект */}
{/*<Route path="/dialogs" element={<Dialogs dialogs={dialogs} messages={messages}/>} />   */}


export default App;
