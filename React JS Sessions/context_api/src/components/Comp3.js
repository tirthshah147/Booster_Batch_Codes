import React,{useContext} from 'react'
import { FirstName } from '../App1';

export default function Comp3() {
  const data = useContext(FirstName);
  return (
    <div>
      {/* <FirstName.Consumer>
        {
          (data) => {
            return <h1>My name is {data.name}</h1>
          }
        }
      </FirstName.Consumer> */}
      <h1>My name is {data.name}</h1>
    </div>
  )
}
