import * as authApi from '../handlers/api/auth'

export default (route) => {
  route.post('/login', authApi.login)
}