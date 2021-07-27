import React from 'react'
import { useState,useEffect, useMemo } from 'react'

// user = {name: "Tirth", likes:likes} -> 3000
// user = {name: "Tirth", likes:likes} -> 4500

export default function UseMemo() {
  // console.log("Starting...");
  const [num,setNum] = useState(0);
  const [likes,setLikes] = useState(0);
  // let user = {name: "Tirth", likes:likes};
  let user = useMemo(() => {
    return {name: "Tirth", likes:likes};
  }, [likes])
  // let user1 = {name: "Tirth", likes:likes};
  

  useEffect(() => {
    console.log("user has changed");
  }, [user])

  return (
    <div>
      <button onClick={() => setNum(num+1)}>Increase</button>
      My number is {num} 
      <button onClick={() => setNum(num-1)}>Decrease</button><br/><br/>
      My likes is {likes} 
    </div>
  )
}
