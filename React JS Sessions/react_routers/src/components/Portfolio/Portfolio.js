import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './loggedhome.css';

export default function Portfolio() {
  return (
    <div className="main-space">
      <Sidebar currpage={"portfolio"}/>
      <div className="work-area">
          <span>this is tirth's portfolio</span>
      </div>
    </div>
  )
}
