import React from "react";
import s from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import Friend from "./friendlist/Friend";


const Sidebar =(props)=>{
    let besties = props.state.friends.map (friend=><Friend name={friend.name} id={friend.id} ava={friend.ava}/>)
return(
<div className={s.bestfriends}>
{besties}
    </div>

)
}

export default Sidebar