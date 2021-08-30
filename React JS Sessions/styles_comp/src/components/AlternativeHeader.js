import React from 'react'
import styled from 'styled-components';
function StyledHeader({title, className}) {
  return (
    <section className={className}> 
      <h1>{title}</h1>
      <h2 className='random'>Another Heading</h2>
    </section>
  )
}

const StyledWrapper = styled(StyledHeader)`
background:cyan;
transition: all 2s ease-in-out;

h1{
  color:blue;
}

.random{
  color:green;
}

&:hover{
  background: black;
}

`

export default StyledWrapper;
