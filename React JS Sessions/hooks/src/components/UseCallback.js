import React from 'react'
import { useState,useCallback } from 'react'
import List from './List';


export default function UseCallback() {
  const [number,setNumber] = useState(1);
  const [dark,setDark] = useState(false);

  // const getItems = () => {
  //   return [number,number + 1,number + 2]
  // };

  const getItems = useCallback(() => {
    return [number,number + 1,number + 2]
  },[number]);

  const theme = {
    backgroundColor : dark ? '#333' : '#FFF',
    color : dark ? '#FFF' : '#333',
    height:"100vh"
  }

  return (
    <div style={theme}>
      <input type="number" 
             value={number} 
             onChange={e => setNumber(parseInt(e.target.value))}/>
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
      <List getItems={getItems}/>
    </div>
  )
}
