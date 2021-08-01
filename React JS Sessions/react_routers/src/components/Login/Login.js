import React from 'react'
import { withRouter } from 'react-router-dom';

function Login(props) {
  console.log(props);
  function loginFunc(){
    localStorage.setItem('userId','123456789');
    if (props.location.state && props.location.state.from) {
      props.history.push(props.location.state.from);
    }else{
      props.history.push('/courses');
    }
  }
  return (
    <div>
      <button onClick={loginFunc}>Login</button>
    </div>
  )
}

export default withRouter(Login);
