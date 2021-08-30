import React from 'react';
import './App.css';
import Title from './components/Title';
import {Button,SecondButton} from './components/Buttons';
import Header from './components/Header';
import StyledHeader from './components/StyledHeader';
import AlternativeHeader from './components/AlternativeHeader.js'
// import {PropsButton, BigButton} from './components/PropsButton';
import {SuccessButton, DangerButton} from './components/PropsButton';
import { createGlobalStyle } from 'styled-components';
import {Hero} from './components/Hero';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';


// inline css
// app css / Global css
// css variables
// file css

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  box-sizing:border-box;
}

body{
  margin:2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
`


function App() {
  return (
    <div>
      <Hero img={img1} big/>
      <Hero img={img2}/>
      <Hero/>
      {/* <GlobalStyle/>
      <AlternativeHeader title='hello from app.js'/> */}
      {/* <StyledHeader title='hello from app.js'/> */}
      {/* <DangerButton big>Danger Button</DangerButton>
      <SuccessButton>Success Button</SuccessButton> */}
      {/* <PropsButton color='blue'>Button Number 1</PropsButton>
      <PropsButton color='red'>Button Number 2</PropsButton>
      <PropsButton>Button Number 2</PropsButton>
      <BigButton color='black'>Big Button Number 1 inherited Propsbutton</BigButton> */}




      {/* <Header/>
      Hello from App
      <Button>Click Me!</Button>
      <SecondButton>Click Me 2!</SecondButton> */}



      {/* <h1>Styled Components!</h1>
      <h2 style={{color:'red', textTransform:"uppercase"}}>Inline styles</h2>
      <h3 className='global'>First Global CSS</h3>
      <h3 className='second'>Second Global</h3>
      <h3 className='third'>Third Global</h3>
      <Title/> */}
    </div>
  )
}


export default App;