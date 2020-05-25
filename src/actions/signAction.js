import axios from 'axios'

export const userSignReq = (userDate) => {
  return dispatch => {
    return axios.post('http://localhost:3030/api/users',userDate)
  }
}