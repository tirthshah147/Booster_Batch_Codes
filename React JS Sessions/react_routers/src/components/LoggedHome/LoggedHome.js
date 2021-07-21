import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './loggedhome.css';

export default function LoggedHome() {
  return (
    <div className="main-space">
      <Sidebar currpage={"loggedhome"}/>
      <div className="work-area">
          <span>Hello Tirth! You are succesfully logged in!</span>
      </div>
    </div>
  )
}
