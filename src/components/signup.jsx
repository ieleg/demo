import React from 'react'
import SignForm from './signform'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as signAction  from '../actions/signAction'
import * as flashMessage  from '../actions/flashMessage'



class SignUp extends React.Component{

  render(){
    return(
      <div>
        <SignForm history={this.props.history} 
        signAction={this.props.signAction}
        flashMessage={this.props.flashMessage}
        ></SignForm>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signAction:bindActionCreators(signAction,dispatch) ,
    flashMessage:bindActionCreators(flashMessage,dispatch)
  }
}

export default connect(null,mapDispatchToProps)(SignUp)