import { text } from "@fortawesome/fontawesome-svg-core";
import { img1, img2, img3, img4 } from "../img/images";
import profileReduser from "./profileReduser";
import dialogsReduser from "./dialogsReduser";
import sidebarReduser from "./sidebarReduser";


let store= {
  _state:{
    profilePage: {
        posts:
        [
            {message:"hi its me", id:1, likesCount:12},
        {message:"sup dog", id:2, likesCount:111}
        ],
        newPostText: ""
        
    },

    dialogsPage:{
        messages: 
        [
            {message:"hi", id:1},
            {message:"wazzaaaaaaaaaaaaap", id:2},
            {message:"im in love wif da koko", id:3},
            {message:"me actually too", id:4},
        ],
        dialogs: 
            [ 
                {name:"Nikolay", id:1, ava: img1 },
                {name:"Ivan", id:2, ava: img2 },
                {name:"Olga" ,id:3, ava: img3  },
                {name:"Alex", id:4, ava: img4 }
        ],
        newMessageBody: "",
    },
    sidebar: {
       friends: 
       [
        {name:"Nikolay", id:1, ava: img1 },
        {name:"Ivan", id:2, ava: img2 },
        {name:"Olga" ,id:3, ava: img3  },
        ]
    }
  },
  _callSubcriber (){
console.log("state was updated")
  },
//  addPost(){
//     let newPost= {
//         id:5,
//         message: this._state.profilePage.newPostText,
//         likesCount:111
//     };

//     this._state.profilePage.posts.push(newPost);
//     this._state.profilePage.newPostText ="";
//     this._callSubcriber();
//   },
//   updateNewPostText(newText){
//     this._state.profilePage.newPostText = newText;
//     this._callSubcriber();
//   },
  // sendMessage (){
  //   let newMessage={
  //     message: this._state.dialogsPage.newMessageText,
  //     id:5,
  //   }
  //   this._state.dialogsPage.messages.push(newMessage);
  //   this._state.dialogsPage.newMessageText="";
  //   this._callSubcriber();
  // },
  // updateNewMessageText(nText){
  //   this._state.dialogsPage.newMessageText= nText;
  //   this._callSubcriber();
  //     },
  subscribe (observer){
    this._callSubcriber=observer; // наблюдатель  addEventListener // кинули сюда в стейт функцию ререндер из индекса, что бы не было цикличной зависимости
        // работает так же, как прокидывали пропсы в апп и дальше, только кидаем функцию из индекса до стейта 
      
      },
      getState(){
        return this._state;
      }, 
  dispatch(action){

    this._state.profilePage=profileReduser(this._state.profilePage,action);
    this._state.dialogsPagePage=dialogsReduser(this._state.dialogsPage,action);
    this._state.sidebar=sidebarReduser(this._state.sidebar,action);
    
    this._callSubcriber(this._state);

  }}
  export default store;
window.store=store;

  // попытаться сделать стор ООП 
  /// запихнуть в новый объект store все данные state, функции сделать методами объекта Store