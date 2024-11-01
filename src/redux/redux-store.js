import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReduser from "./profileReduser";
import dialogsReduser from "./dialogsReduser";
import sidebarReduser from "./sidebarReduser";
let reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReduser
});
let store= createStore(reducers);

export default store;