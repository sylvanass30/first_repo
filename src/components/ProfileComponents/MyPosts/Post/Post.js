import React from "react";
import s from "./Post.module.css"

const Post=(props)=>{

    return (
  <div className={s.item}>

    <img src="https://i.ebayimg.com/images/g/DR8AAOSwqrRi~jTQ/s-l1600.jpg" />
    {props.message}
  <div>
   <span>like {props.likesCount}</span>
   </div>
   </div>
        
      
    )
}
export default Post;