import React from 'react';

const Card = ({name,email,id}) => {
  return(
    <div className=' tc bg-light-green dib br3 pa3 grow ma2 shadow-2'>
      <img src={`https://robohash.org/${id}?200x200`} alt="robotsImage"/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}


export default Card;