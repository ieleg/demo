import React from 'react'
import FlashMessage from './flashmessage'
import {connect} from 'react-redux'
import {deleteFlashMessage} from '../actions/flashMessage'
class Home extends React.Component{
  componentDidMount(){
    console.log(this.props);
  }
  render(){
    const messages = this.props.messages.map( item => 
      <FlashMessage key={item.id} mes={item} deleteFlashMessage={this.props.deleteFlashMessage}></FlashMessage>     
    )
    return(
      <div>
        <h1>欢迎来到页面</h1>
        {messages}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    //flashMessage 是reducer里的
    messages:state.flashMessages
  }
}

export default connect(mapStateToProps,{deleteFlashMessage})(Home);