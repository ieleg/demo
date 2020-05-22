import axios from 'axios'

export const userSignReq = (userDate) => {
  return dispatch => {
    return axios.post('/api/users',userDate)
  }
}