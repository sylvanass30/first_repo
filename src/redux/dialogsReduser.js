const UPDATE_NEW_MESSAGE_TEXT='UPDATE_NEW_MESSAGE_TEXT'
const SEND_MESSAGE='SEND_MESSAGE'

let initialState={
  messages: 
  [
      {message:"hi", id:1},
      {message:"wazzaaaaaaaaaaaaap", id:2},
      {message:"im in love wif da koko", id:3},
      {message:"me actually too", id:4},
  ],
  dialogs: 
      [ 
          {name:"Nikolay", id:1/*, ava: img1 */},
          {name:"Ivan", id:2 /*, ava: img2 */},
          {name:"Olga" ,id:3 /*, ava: img3 */ },
          {name:"Alex", id: 4/*, ava: img4 */}
  ],
  newMessageBody: "",
}

const dialogsReduser = (state=initialState,action)=>{

  switch (action.type){
    case SEND_MESSAGE:
      let newBody={
        message: state.newMessageBody,
        id:5,
      }
      state.newMessageBody='';
      state.messages.push(newBody);
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
        state.newMessageBody= action.body;
        return state;
    default:
      return state;
  }
}
export const updatenewMessageBodyActionCreator=(body)=>
  ({type:UPDATE_NEW_MESSAGE_TEXT,body:body})
export const sendMessageActionCreator =()=>({type: SEND_MESSAGE})

export default dialogsReduser 