import React from 'react'
import styled from 'styled-components';
export default function StyledHeader({title}) {
  return (
    <StyledWrapper>
      <h1>{title}</h1>
      <h2 className='random'>Another Heading</h2>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.section`
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
