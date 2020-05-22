import React from 'react'

export default class SignForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:'',
      email:'',
      password:'',
      passwordR:''
    }
  }
  componentDidUpdate(){
 
    
  }
  onChange = e => {
    
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    
  }
  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <h1>注册一个新账号</h1>
        <div>
          <label >用户名</label>
          <input 
            type="text"
            name='username'
            value={this.state.username}
            onChange={this.onChange}/>
        </div>
        <div>
          <label >邮箱</label>
          <input 
            type="email"
            name='email'
            value={this.state.email}
            onChange={this.onChange}/>
        </div>
        <div>
          <label >密码</label>
          <input 
            type="password"
            name='password'
            value={this.state.password}
            onChange={this.onChange}/>
        </div> 
        <div>
          <label >确认密码</label>
          <input 
            type="password"
            name='passwordR'
            value={this.state.passwordR}
            onChange={this.onChange}/>
        </div>  
        <div>
          <button>提交</button>
        </div>            
      </form>
    )
  }
}