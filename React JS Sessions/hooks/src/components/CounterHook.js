import { disconnect } from 'node:process';
import React from 'react'
import { useState, useEffect } from 'react'

export default function CounterHook() {

  const [count,setCount] = useState(0);
  const [isOn,setIsOn] = useState(false);
    
  // const [online,setOnline] = useState({name:"Purshottam"});




  // useEffect(() => {
  //   //logic
  //   connect(online);
  //   return () => disconnect(online);

  // },[online])

  // //button clicked this button randomly we selected arafat
  // online = {name:"arafat"}
  // setOnline({name:"arafat"})
  // disconnect(online)
  // connect(online);

  

  

  useEffect(() => {
    if (count === 0 && !isOn) return;
    document.title = isOn;
    setCount(count + 1);
    console.log("main effect",isOn);
    return () => console.log("CleanUp effect",isOn);
  },[isOn])

  useEffect(() => {
    console.log("first render");
    // return () => console.log("cleanup!");
  },[]);

  useEffect(() => {
    console.log("effect start");
    // return () => console.log("cleanup!");
  })


  

  // const [state,setState] = useState({
  //   count: 0,
  //   isOn : false
  // })


  // const handleClick = () => {
  //   const {count, isOn} = state;
  //   setState({count : count + 1,isOn : !isOn});
  // }

  const handleClick = () => {
    // setCount((prevCount) => prevCount + 1);
    setIsOn(!isOn);
  }

  return (
    <div>
        <h1>{isOn ? "ON" : "OFF"}</h1>
        <h1>I was clicked {count} times</h1>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}
