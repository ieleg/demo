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
  onSubmit2 = e => {
    console.log(123); 
    // console.log(this.state);
     e.preventDefault();
     this.props.login(this.state).then(res => {
       
       console.log(res);  
       this.props.history.push('/');

     }).catch(err => {
      //  console.log(err);
       
       this.setState({
         errors:err.response.data
       })
     })
  }
  render(){
    const {errors,isLoading} = this.state;
    return(
      <form onSubmit={this.onSubmit2}> 
        <h1>登录</h1>
        {errors.err && <span style={{color:'red'}}>{errors.err}</span>}
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