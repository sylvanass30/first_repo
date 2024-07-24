import React from "react";
import s from "./ProfileComponents.module.css"

const ProfileComponent =()=>{
    return (
        <div className='content'>
        <img src='https://t4.ftcdn.net/jpg/05/36/32/95/360_F_536329537_RblOApJIbTIPjNlROJrKKiJaFmceLJvZ.jpg'/>
        <div>
        <img className="ava" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQOa8CUzWDdzjNqEk4KL1LlJctwUpjfHYN-Q&s'/>
        ava + discription
        </div>
        <div className={s.posts}>
        <div className={s.item}>
          my posts
        </div>
        <div className={s.item}>
          new post
        </div>
        <div className={s.item}>
          old posts
        </div>
        </div>
      </div>
    )
}
export default ProfileComponent