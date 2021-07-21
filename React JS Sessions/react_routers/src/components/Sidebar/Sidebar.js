import React from 'react';
import { withRouter } from 'react-router-dom';
import './sidebar.css';


function Sidebar(props) {
  return (
    <div className="sidebar_block">
      <div 
      className={props.currpage === "loggedhome" ? "current_item" : "sidebar_item"} 
      onClick={() => props.history.push('/profile')}>
        My Profile
      </div>
      <div 
      className={props.currpage === "portfolio" ? "current_item" : "sidebar_item"}
      onClick={() => props.history.push('/portfolio')}
      >
        Portfolio
      </div>
    </div>
  )
}


export default withRouter(Sidebar);
