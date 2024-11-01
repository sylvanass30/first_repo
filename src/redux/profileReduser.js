
const ADD_POST ='ADD_POST'
const UPDATE_NEW_POST_TEXT= 'UPDATE_NEW_POST_TEXT'

let initialState={
    posts:
    [
        {message:"hi its me", id:1, likesCount:12},
    {message:"sup dog", id:2, likesCount:111}
    ],
    newPostText: ""
    
}

const profileReduser = (state=initialState,action)=>{
    switch(action.type)
    {
        case ADD_POST:
            let newPost= {
                id:5,
                message: state.newPostText,
                likesCount:111
            };
            
            state.posts.push(newPost);
            state.newPostText ="";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}
export const addPostActionCreator =()=>({type: ADD_POST})
export const updateNewPostTextActionCreator = (text)=>
({type:UPDATE_NEW_POST_TEXT,newText: text})

export default profileReduser