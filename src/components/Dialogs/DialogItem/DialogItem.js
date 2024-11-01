import React from "react";
import s from "./../Dialogs.module.css"
import { NavLink } from "react-router-dom";
import { img1 } from "../../../img/images";


const DialogItem=(props)=>{

let path= '/dialogs/'+ props.id;

    return (
<div className={s.dialog}>
<img src={props.ava}/>
       <NavLink to={path}> {props.name}</NavLink>
    </div>
    )
}

export default DialogItem;