import React from 'react'
import './sign.css'

export default class SignForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username:'',
      email:'',
      password:'',
      passwordR:'',
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
    //点了提交之后知道返回数据后才能再点
    this.setState({errors:{},isLoading:true});
    
    // console.log(this.state);
    this.props.signAction.userSignReq(this.state).then(
      (res)=>{
        console.log(res);
        this.props.flashMessage.addFlashMessage({
          type:"success",
          text:'欢迎用户'+this.state.username+' '+"注册成功"
        })
        this.props.history.push('/')
      })
    .catch(e=>{
      // console.log(e.response);
      //如果返回的是400错误码，得到报文中的错误信息
      // this.setState({errors:e.response.data,isLoading:false})
      console.log(e);
      
      console.log("注册失败");      

    })
    
  }
  render(){
    const  {errors,isLoading} = this.state;
    return(
      <form onSubmit={this.onSubmit}>
        <h1>注册一个新账号</h1>
        <div>
          <label className={"input-label"}>用户名</label>
          <input 
            type="text"
            name='username'
            value={this.state.username}
            onChange={this.onChange}
            className={errors.username?"error":null}/>
            {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
          <label className={"input-label"}>邮箱</label>
          <input 
            type="email"
            name='email'
            value={this.state.email}
            className={errors.email?"error":null}

            onChange={this.onChange}/>
            {errors.email && <span>{errors.email}</span>}

        </div>
        <div>
          <label className={"input-label"}>密码</label>
          <input 
            type="password"
            name='password'
            value={this.state.password}
            className={errors.password?"error":null}

            onChange={this.onChange}/>
            {errors.password && <span>{errors.password}</span>}
            
        </div> 
        <div>
          <label className={"input-label"}>确认密码</label>
          <input 
            type="password"
            name='passwordR'
            value={this.state.passwordR}
            className={errors.passwordR?"error":null}

            onChange={this.onChange}/>
            {errors.passwordR && <span>{errors.passwordR}</span>}

        </div>  
        <div>
          <input type="submit" value="提2交" />
        </div>            
      </form>
    )
  }
}