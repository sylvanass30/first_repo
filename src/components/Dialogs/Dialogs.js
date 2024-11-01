import React from "react";
import s from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { updatenewMessageBodyActionCreator,sendMessageActionCreator } from "../../redux/dialogsReduser";






const Dialogs =(props)=>{
   let state=props.store.getState().dialogsPage;
   let dialogsElements = state.dialogs.map (dialog=><DialogItem 
      name={dialog.name} 
      id={dialog.id} 
      ava={dialog.ava}/>);
   let messagesElements= state.messages.map( message => <Message 
      message={message.message} 
      id={message.id}/>);



   let newBodyText= state.newBodyText

   let sendMessage=()=>{
      props.store.dispatch(sendMessageActionCreator())
   }
   let onMessageChange=(e)=>{
    let newBody= e.target.value
    props.store.dispatch(updatenewMessageBodyActionCreator(newBody))
   }
return (
<div className={s.dialogs}>
   <div className={s.dialogsItems}>
{dialogsElements}
   </div>
<div className={s.messages}>
   {messagesElements}
   <div>

   <textarea placeholder='enter ur message' 
   value={newBodyText} 
   onChange={onMessageChange}></textarea> 
   <div>
   <button onClick={sendMessage}>Отправить сообщение</button>
   
   </div>
   </div>
   
</div>

</div>

)
}
export default Dialogs;