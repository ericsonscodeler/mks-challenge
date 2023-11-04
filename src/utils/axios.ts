import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1',
})
