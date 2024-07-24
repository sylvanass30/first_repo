import React from "react";
import classes from "./Nav.module.css"

let c1 = "item";
let c2 = "active";
let classesNew = `${classes.item} ${classes.active}`
const Nav =()=>{
    return(
        <nav className={classes.nav}>
          <div className={classes.item}>
           <a>profile</a> 
          </div>
          <div className={`${classes.item} ${classes.active}`}>
          <a>messages</a>
          </div>
          <div className={classes.item}>
          <a>news</a>
          </div>
          <div className={classes.item}>
           <a> musics</a>
          </div>
          <div className={classes.item}>
          <a>settings</a>
          </div>
        </nav>
    )
}
export default Nav