import React from 'react'
import axios from 'axios'

export default class Kuayu extends React.Component{
  componentDidMount(){
    // fetch("/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=10&offset=0")
    // .then(res=>{
    //   return res.json();
    // }).then(data=>{
    //   console.log(data);
      
    // })
    axios.post("http://localhost:3030/api/users",'asd')
  }
  render(){
    return(
      <div>

      </div>
    )
  }
}