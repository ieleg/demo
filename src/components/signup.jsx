import React from 'react'
import SignForm from './signform'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as signAction  from '../actions/signAction'


export default class SignUp extends React.Component{
  render(){
    return(
      <div>

        <SignForm></SignForm>
      </div>
    )
  }
}

// export default connect(null,)