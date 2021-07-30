import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
  // if (true) {
  //   throw new Error("OOOOOOOOOo!!!!!!!");
  // }
  return (
    <div>
      {robots.map((robot,i) => {
        return <Card id={robot.id} name={robot.name} email={robot.email} key={i}/>
      })
      }
      
    </div>
  )
}


export default CardList;