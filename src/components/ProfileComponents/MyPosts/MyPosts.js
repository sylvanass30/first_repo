import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import { addPostActionCreator,updateNewPostTextActionCreator  } from "../../../redux/profileReduser";




const MyPosts=(props)=>{


  /*let posts=[
    {message:"hi its me", id:1, likesCount:12},
    {message:"sup dog", id:2, likesCount:111}
 ]*/

 let postsElements= props.posts.map(post=><Post 
  message={post.message} 
  id={post.id} 
  likesCount={post.likesCount}/>)

 let newPostElement = React.createRef();




 let addPost =()=>{
  props.dispatch(addPostActionCreator());

 }
 let onPostChange=()=>{
  let text = newPostElement.current.value;
  let action = updateNewPostTextActionCreator(text)
  props.dispatch(action);
 
 }

    return (
       
      
    <div className={s.postsBlock}>
          <h3>  my posts  </h3>      
          <div>
<div>
          <textarea ref={newPostElement} 
          placeholder="wasup?"
          value={props.newPostText} 
          onChange={onPostChange}/>
</div>

          <button onClick={addPost}> add post</button>
          <button>delete  </button>

        </div>

            <div className={s.posts}>
              {postsElements}
              {/* <Post message={postData[0].message} likeCounter={postData[0].likesCount} id={postData[0].id}/>
              <Post message={postData[1].message} likeCounter={postData[1].likesCount} id={postData[1].id}/> */}
            </div>
            </div>
    )
}
export default MyPosts;