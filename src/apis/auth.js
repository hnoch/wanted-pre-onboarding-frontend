import { cmnAxios } from '../libs/cmnAxios'

// NOTE 회원가입
export const signupApi = body => {
  return cmnAxios.post('/auth/signup', body)
}

// NOTE 로그인
export const signinApi = body => {
  return cmnAxios.post('/auth/signin', body)
}
