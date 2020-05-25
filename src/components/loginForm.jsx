import React from 'react'
import {login} from '../actions/login'
import {connect} from 'react-redux'
 class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:'',
      password:'',
      errors:{},
      isLoading:false,
    }
  }
  onChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  onSubmit = e => {
     e.preventDefault();
     this.props.login(this.state).then(ers => {
       console.log('success');  
     }).catch(err => {
       console.log(err.response);
       
     })
  }
  render(){
    return(
      <form onSubmit={this.onSubmit}> 
        <h1>登录</h1>
        <div>
          <label className={"input-label"}>用户名</label>
          <input 
            type="text"
            name='username'
            value={this.state.username}
            onChange={this.onChange}/>
              
        </div>
        <div>
          <label className={"input-label"}>密码</label>
          <input 
            type="password"
            name='password'
            value={this.state.password}
            onChange={this.onChange}/>
        </div>
        <input type="submit" value="登录"/>
      </form>
    )
  }
}

export default connect(null,{login})(LoginForm)