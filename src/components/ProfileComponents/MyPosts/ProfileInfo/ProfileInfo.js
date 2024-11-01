import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo =()=>{
    return (
        <div>
           
            <div>
        <img src='https://t4.ftcdn.net/jpg/05/36/32/95/360_F_536329537_RblOApJIbTIPjNlROJrKKiJaFmceLJvZ.jpg'/>
            </div>
        
        <div>
        <img className="ava" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQOa8CUzWDdzjNqEk4KL1LlJctwUpjfHYN-Q&s'/>
        </div>
        <div className={s.descriptionBlock}>
            opisanye
        </div>
        </div>
    )
}
export default ProfileInfo