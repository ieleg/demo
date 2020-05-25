import axios from 'axios'

export const login = data => {
  return dispatch => {
    return axios.post("http://localhost:3030/api/users",data)
  }
}