import React from 'react'
import {Route} from 'react-router-dom'
import Home from '../components/home'
import SignUP from '../components/signup'



export default(
  <div>

    <Route exact strict path='/' component={Home}></Route>
    <Route exact strict path='/signup' component={SignUP}></Route>

  </div>
)
