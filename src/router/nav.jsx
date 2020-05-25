import React from 'react'
import {Link} from 'react-router-dom'
export default class Nav extends React.Component{
  
  render(){
    return(
      <div style={{display:"flex",height:'5vh',backgroundColor:'#3498db',justifyItems:'center',alignItems:'center'}}>
        <Link to='/' style={{
          width:'10%',
          textAlign:'center',
          textDecoration:'none',
          color:'#fff',
          }}>首页</Link>
        <Link to='/login' style={{
          width:'10%',
          textAlign:'center',
          textDecoration:'none',
          color:'#fff'}}>登录</Link>
        <Link to='/signup' style={{
          width:'10%',
          textAlign:'center',
          textDecoration:'none',
          color:'#fff'}}>注册</Link>
      </div>
    )
  }
}