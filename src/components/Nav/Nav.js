import React from "react";
import s from "./Nav.module.css"
import { NavLink } from "react-router-dom";


const Nav =()=>{
    return(
        <nav className={s.nav}>
          <div className={s.item}>
           <NavLink to="/Profile" className = { navData => navData.isActive ? s.active : s.item }>profile</NavLink> 
          </div>
          <div className={s.item}>
          <NavLink to="/Dialogs" className = { navData => navData.isActive ? s.active : s.item }>messages</NavLink>
          </div>
          <div className={s.item}>
          <NavLink to="News" className = { navData => navData.isActive ? s.active : s.item }>news</NavLink>
          </div>
          <div className={s.item}>
           <NavLink to="Music" className = { navData => navData.isActive ? s.active : s.item }> musics</NavLink>
          </div>
          <div className={s.item}>
          <NavLink to="Settings" className = { navData => navData.isActive ? s.active : s.item }>settings</NavLink>
          </div>
        </nav>
    )
}
export default Nav