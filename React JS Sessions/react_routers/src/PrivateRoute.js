import React from 'react';
import { Redirect,Route } from 'react-router-dom';

export default function PrivateRoute({component:Component,...rest}) {
  const isLoggedIn = localStorage.getItem('userId');
  return (
    <Route
    {...rest}
    render={(props) => 
      isLoggedIn ? <Component {...props}/> : <Redirect to={{pathname:'/login',state:{from:props.location}}}/>}
    />
  )
}



