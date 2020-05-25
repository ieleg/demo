import React from'react'
import './flash.css'
export default class FlashMessage extends React.Component{
  onClick = e => {
    this.props.deleteFlashMessage(this.props.mes.id)
  }
  render(){
    const {type,text} = this.props.mes;
    return(
      <div className={text?"tip":null}>
        {text}
      <button onClick={this.onClick} className={"delete-mes"}>x</button>

      </div>
      // 移除操作
    )
  }
}