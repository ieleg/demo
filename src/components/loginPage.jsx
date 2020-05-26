import React from 'react'
import LoginForm from './loginForm'


class LoginPage extends React.Component{
  render(){
    return(
      <div>
        <LoginForm history={this.props.history}></LoginForm>
      </div>
    )
  }
}

export default LoginPage